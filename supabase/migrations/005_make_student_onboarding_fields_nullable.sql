-- Grade, region, and state are now collected during onboarding (not signup).
-- Make them nullable so the student record can be created before onboarding completes.
ALTER TABLE students ALTER COLUMN grade DROP NOT NULL;
ALTER TABLE students ALTER COLUMN region DROP NOT NULL;
ALTER TABLE students ALTER COLUMN state DROP NOT NULL;

-- Remove defaults that made onboarding steps appear pre-completed.
-- These fields should be NULL until explicitly set during onboarding.
ALTER TABLE students ALTER COLUMN dialect_preference DROP DEFAULT;
ALTER TABLE students ALTER COLUMN offline_download_preference DROP DEFAULT;
ALTER TABLE students ALTER COLUMN subjects DROP DEFAULT;
ALTER TABLE students ALTER COLUMN subjects DROP NOT NULL;
