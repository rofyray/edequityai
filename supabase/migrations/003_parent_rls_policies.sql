-- EdEquity AI — Parent RLS Policies
-- Migration 003: Allow verified parents to read their child's data

-- Parents can view their own links
CREATE POLICY "parent_own_links" ON parent_student_links
  FOR SELECT USING (auth.uid() = parent_id);

-- Parents can view linked child's standard mastery
CREATE POLICY "parent_child_mastery" ON standard_mastery
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM parent_student_links psl
      WHERE psl.parent_id = auth.uid()
        AND psl.student_id = standard_mastery.student_id
        AND psl.verified = true
    )
  );

-- Parents can view linked child's sessions (summary only)
CREATE POLICY "parent_child_sessions" ON sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM parent_student_links psl
      WHERE psl.parent_id = auth.uid()
        AND psl.student_id = sessions.student_id
        AND psl.verified = true
    )
  );
