-- EdEquity AI — Security Hardening RLS Policies
-- Migration 004: Fix missing RLS policies identified in security audit

-- ============================================
-- Finding 1: data_deletion_requests (FERPA compliance)
-- ============================================
CREATE POLICY "students_own_deletion_requests" ON data_deletion_requests
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "students_create_deletion_requests" ON data_deletion_requests
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "admins_all_deletion_requests" ON data_deletion_requests
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- Finding 2: parent_consents (COPPA compliance)
-- ============================================
CREATE POLICY "students_own_consents" ON parent_consents
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "admins_manage_consents" ON parent_consents
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- Finding 3: teacher_class_assignments write restriction
-- ============================================
CREATE POLICY "teacher_manage_own_assignments" ON teacher_class_assignments
  FOR DELETE USING (auth.uid() = teacher_id);

CREATE POLICY "teacher_create_assignments" ON teacher_class_assignments
  FOR INSERT WITH CHECK (auth.uid() = teacher_id);

-- ============================================
-- parent_student_links: restrict INSERT to parents
-- ============================================
CREATE POLICY "parent_create_links" ON parent_student_links
  FOR INSERT WITH CHECK (auth.uid() = parent_id);
