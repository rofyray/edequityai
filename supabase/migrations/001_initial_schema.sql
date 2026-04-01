-- EdEquity AI — Initial Database Schema
-- Migration 001: Core tables, pgvector, RLS policies

-- ============================================
-- Extensions
-- ============================================
CREATE EXTENSION IF NOT EXISTS "pgvector";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Enums
-- ============================================
CREATE TYPE user_role AS ENUM ('student', 'teacher', 'parent', 'admin');
CREATE TYPE region_type AS ENUM ('appalachia', 'delta', 'tribal');
CREATE TYPE subject_type AS ENUM ('math', 'ela');
CREATE TYPE grade_band_type AS ENUM ('k5', '6-8', '9-12');
CREATE TYPE launch_phase_type AS ENUM ('mvp', 'phase2', 'phase3');

-- ============================================
-- Users & Profiles
-- ============================================
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'student',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE students (
  id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  grade INTEGER NOT NULL CHECK (grade BETWEEN 0 AND 12),
  region region_type NOT NULL,
  state TEXT NOT NULL,
  date_of_birth DATE,
  dialect_preference TEXT DEFAULT 'standard',
  offline_download_preference BOOLEAN DEFAULT false,
  subjects subject_type[] NOT NULL DEFAULT '{math,ela}',
  streak_days INTEGER NOT NULL DEFAULT 0,
  streak_last_active DATE,
  xp_total INTEGER NOT NULL DEFAULT 0,
  onboarding_completed BOOLEAN NOT NULL DEFAULT false,
  onboarding_step INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE teachers (
  id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  school_name TEXT,
  district_id UUID,
  region region_type,
  state TEXT,
  grades_taught INTEGER[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE parents (
  id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Parent-Student Links
-- ============================================
CREATE TABLE parent_student_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  verified BOOLEAN NOT NULL DEFAULT false,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(parent_id, student_id)
);

-- ============================================
-- Teacher-Student Assignments
-- ============================================
CREATE TABLE teacher_class_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(teacher_id, student_id)
);

-- ============================================
-- COPPA / Privacy Compliance
-- ============================================
CREATE TABLE parent_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_email TEXT NOT NULL,
  consent_given BOOLEAN NOT NULL,
  consent_timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_address_hash TEXT,
  consent_version TEXT NOT NULL DEFAULT '1.0'
);

CREATE TABLE data_deletion_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  requested_by TEXT NOT NULL,
  requested_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  status TEXT NOT NULL CHECK (status IN ('pending', 'processing', 'complete')) DEFAULT 'pending'
);

-- ============================================
-- Curriculum Content (pgvector RAG)
-- ============================================
CREATE TABLE curriculum_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  region TEXT NOT NULL CHECK (region IN ('appalachia', 'delta', 'tribal', 'all')),
  state TEXT NOT NULL,
  launch_phase launch_phase_type NOT NULL,
  subject subject_type NOT NULL,
  grade INTEGER NOT NULL CHECK (grade BETWEEN 0 AND 12),
  grade_band grade_band_type NOT NULL,
  topic_cluster TEXT NOT NULL,
  standard_code TEXT,
  content_text TEXT NOT NULL,
  embedding vector(1536),
  cultural_variant TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_curriculum_embedding ON curriculum_content
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

CREATE INDEX idx_curriculum_search ON curriculum_content (region, subject, grade);

-- ============================================
-- Modules (Structured Learning Units)
-- ============================================
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  subject subject_type NOT NULL,
  grade INTEGER NOT NULL CHECK (grade BETWEEN 0 AND 12),
  grade_band grade_band_type NOT NULL,
  region TEXT NOT NULL CHECK (region IN ('appalachia', 'delta', 'tribal', 'all')),
  state TEXT NOT NULL DEFAULT 'ALL',
  standard_codes TEXT[],
  topic_cluster TEXT NOT NULL,
  segment_count INTEGER NOT NULL DEFAULT 5,
  estimated_minutes INTEGER NOT NULL DEFAULT 18,
  xp_reward INTEGER NOT NULL DEFAULT 50,
  content JSONB,
  is_placeholder BOOLEAN NOT NULL DEFAULT true,
  launch_phase launch_phase_type NOT NULL DEFAULT 'mvp',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_modules_browse ON modules (region, subject, grade, grade_band);

-- ============================================
-- Sessions & Progress
-- ============================================
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at TIMESTAMPTZ,
  module_id UUID REFERENCES modules(id),
  events_count INTEGER NOT NULL DEFAULT 0,
  is_offline BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE session_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL CHECK (event_type IN (
    'explanation_given', 'question_attempted', 'hint_used',
    'correct_answer', 'incorrect_answer', 'module_complete',
    'segment_complete', 'voice_interaction', 'tts_played'
  )),
  module_id UUID REFERENCES modules(id),
  standard_code TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_session_events_student ON session_events (student_id, created_at DESC);

CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  segment_index INTEGER NOT NULL DEFAULT 0,
  score NUMERIC(5,2),
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  attempts INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, module_id)
);

CREATE TABLE standard_mastery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  standard_code TEXT NOT NULL,
  subject subject_type NOT NULL,
  mastery_percentage NUMERIC(5,2) NOT NULL DEFAULT 0,
  data_points INTEGER NOT NULL DEFAULT 0,
  last_assessed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, standard_code)
);

-- ============================================
-- Assessments
-- ============================================
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  subject subject_type NOT NULL,
  grade INTEGER NOT NULL,
  standard_code TEXT NOT NULL,
  items JSONB NOT NULL,
  score NUMERIC(5,2),
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  difficulty TEXT CHECK (difficulty IN ('foundational', 'grade_level', 'advanced')) DEFAULT 'grade_level',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Tutor Conversations
-- ============================================
CREATE TABLE tutor_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  messages JSONB NOT NULL DEFAULT '[]',
  subject subject_type,
  region region_type,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Districts (Admin)
-- ============================================
CREATE TABLE districts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  region region_type NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'inactive', 'pending')) DEFAULT 'active',
  contact_email TEXT,
  student_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Module Assignments (Teacher → Student)
-- ============================================
CREATE TABLE module_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

-- ============================================
-- Row-Level Security (RLS)
-- ============================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE parent_student_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_class_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE standard_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE tutor_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE parent_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE districts ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_assignments ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "users_own_profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Students can read/update their own record
CREATE POLICY "student_own_data" ON students
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "student_update_own" ON students
  FOR UPDATE USING (auth.uid() = id);

-- Students see only their own progress
CREATE POLICY "student_own_progress" ON student_progress
  FOR ALL USING (auth.uid() = student_id);

-- Students see only their own mastery
CREATE POLICY "student_own_mastery" ON standard_mastery
  FOR ALL USING (auth.uid() = student_id);

-- Students see only their own session events
CREATE POLICY "student_own_events" ON session_events
  FOR ALL USING (auth.uid() = student_id);

-- Students see only their own sessions
CREATE POLICY "student_own_sessions" ON sessions
  FOR ALL USING (auth.uid() = student_id);

-- Students see only their own assessments
CREATE POLICY "student_own_assessments" ON assessments
  FOR ALL USING (auth.uid() = student_id);

-- Students see only their own conversations (private from teachers)
CREATE POLICY "student_own_conversations" ON tutor_conversations
  FOR ALL USING (auth.uid() = student_id);

-- Teachers can read data for students in their class
CREATE POLICY "teacher_class_progress" ON student_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM teacher_class_assignments tca
      WHERE tca.teacher_id = auth.uid()
        AND tca.student_id = student_progress.student_id
    )
  );

CREATE POLICY "teacher_class_mastery" ON standard_mastery
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM teacher_class_assignments tca
      WHERE tca.teacher_id = auth.uid()
        AND tca.student_id = standard_mastery.student_id
    )
  );

CREATE POLICY "teacher_class_students" ON students
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM teacher_class_assignments tca
      WHERE tca.teacher_id = auth.uid()
        AND tca.student_id = students.id
    )
  );

-- Parents can read their linked child's data (summary only)
CREATE POLICY "parent_child_progress" ON student_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM parent_student_links psl
      WHERE psl.parent_id = auth.uid()
        AND psl.student_id = student_progress.student_id
        AND psl.verified = true
    )
  );

-- Modules and curriculum are readable by all authenticated users
CREATE POLICY "modules_read_all" ON modules
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "curriculum_read_all" ON curriculum_content
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Module assignments readable by teacher or student involved
CREATE POLICY "assignments_teacher" ON module_assignments
  FOR ALL USING (auth.uid() = teacher_id);
CREATE POLICY "assignments_student" ON module_assignments
  FOR SELECT USING (auth.uid() = student_id);

-- Districts visible to admins only (enforced at API level with service role)
CREATE POLICY "districts_admin_only" ON districts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- Updated-at triggers
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER students_updated_at BEFORE UPDATE ON students
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER student_progress_updated_at BEFORE UPDATE ON student_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER standard_mastery_updated_at BEFORE UPDATE ON standard_mastery
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER modules_updated_at BEFORE UPDATE ON modules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tutor_conversations_updated_at BEFORE UPDATE ON tutor_conversations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER districts_updated_at BEFORE UPDATE ON districts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
