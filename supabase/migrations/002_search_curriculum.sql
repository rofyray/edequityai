-- EdEquity AI — Search Curriculum RPC
-- Migration 002: pgvector cosine similarity search function for RAG

CREATE OR REPLACE FUNCTION search_curriculum(
  query_embedding vector(1536),
  student_region text,
  search_subject subject_type,
  search_grade integer,
  result_limit integer DEFAULT 5
)
RETURNS TABLE (
  content_text text,
  standard_code text,
  topic_cluster text,
  region text,
  similarity float
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    cc.content_text,
    cc.standard_code,
    cc.topic_cluster,
    cc.region,
    (1 - (cc.embedding <=> query_embedding))::float AS similarity
  FROM curriculum_content cc
  WHERE cc.region IN (student_region, 'all')
    AND cc.subject = search_subject
    AND cc.grade BETWEEN search_grade - 1 AND search_grade + 1
    AND cc.embedding IS NOT NULL
  ORDER BY cc.embedding <=> query_embedding
  LIMIT result_limit;
END;
$$;
