import { generateEmbedding } from './embeddings'
import type { SearchCurriculumParams, SearchCurriculumResult } from '../ingestion/types'

/**
 * Search curriculum content using pgvector cosine similarity.
 * Generates an embedding for the query text, then calls the
 * search_curriculum RPC on Supabase.
 */
export async function searchCurriculum(
  params: SearchCurriculumParams
): Promise<SearchCurriculumResult[]> {
  const { createServiceRoleClient } = await import('../supabase/server')
  const supabase = await createServiceRoleClient()

  const queryEmbedding = await generateEmbedding(params.queryText)

  const { data, error } = await supabase.rpc('search_curriculum', {
    query_embedding: queryEmbedding,
    student_region: params.region,
    search_subject: params.subject,
    search_grade: params.grade,
    result_limit: params.limit ?? 5,
  })

  if (error) {
    throw new Error(`Curriculum search failed: ${error.message}`)
  }

  return (data ?? []).map((row: Record<string, unknown>) => ({
    contentText: row.content_text as string,
    standardCode: (row.standard_code as string) ?? null,
    topicCluster: row.topic_cluster as string,
    region: row.region as string,
    similarity: row.similarity as number,
  }))
}
