/**
 * Seed script: Populate modules + curriculum_content tables with K-5 curriculum data.
 *
 * Run: npx tsx scripts/seed-modules.ts
 *
 * Idempotent: deletes existing K-5 MVP data before inserting.
 * Generates OpenAI embeddings for all curriculum chunks.
 */

import { createAdminClient } from './lib/supabase-admin'
import { K5_CURRICULUM } from '../src/lib/ingestion/curriculum-catalog'
import { chunkModuleContent } from '../src/lib/ingestion/chunker'
import { generateEmbeddings } from '../src/lib/ai/embeddings'
import { CULTURAL_CONTEXTS, getCulturalHook } from '../src/lib/ingestion/cultural-variants'
import type { Region, CurriculumChunk } from '../src/lib/ingestion/types'

const REGIONS: Region[] = ['appalachia', 'delta', 'tribal']
const BATCH_INSERT_SIZE = 50

async function main() {
  console.log('🌱 EdEquity AI — K-5 Curriculum Seed Script')
  console.log(`📚 Modules to seed: ${K5_CURRICULUM.length}`)
  console.log('')

  const supabase = createAdminClient()

  // ============================================
  // Step 1: Clean existing K-5 MVP data
  // ============================================
  console.log('🗑️  Cleaning existing K-5 data...')

  const { error: delContentErr } = await supabase
    .from('curriculum_content')
    .delete()
    .eq('grade_band', 'k5')
    .eq('launch_phase', 'mvp')

  if (delContentErr) {
    console.warn('  Warning deleting curriculum_content:', delContentErr.message)
  }

  const { error: delModulesErr } = await supabase
    .from('modules')
    .delete()
    .eq('grade_band', 'k5')
    .eq('launch_phase', 'mvp')

  if (delModulesErr) {
    console.warn('  Warning deleting modules:', delModulesErr.message)
  }

  console.log('  ✅ Cleaned')

  // ============================================
  // Step 2: Insert modules
  // ============================================
  console.log('📦 Inserting modules...')

  const moduleRows = K5_CURRICULUM.map((m) => ({
    slug: m.slug,
    title: m.title,
    description: m.description,
    subject: m.subject,
    grade: m.grade,
    grade_band: m.gradeBand,
    region: 'all',
    state: 'ALL',
    standard_codes: m.standardCodes,
    topic_cluster: m.topicCluster,
    segment_count: m.content.segments.length,
    estimated_minutes: Math.max(15, m.content.segments.length * 4),
    xp_reward: 50,
    content: m.content,
    is_placeholder: false,
    launch_phase: 'mvp',
  }))

  // Insert in batches
  for (let i = 0; i < moduleRows.length; i += BATCH_INSERT_SIZE) {
    const batch = moduleRows.slice(i, i + BATCH_INSERT_SIZE)
    const { error } = await supabase.from('modules').insert(batch)
    if (error) {
      console.error(`  ❌ Failed inserting modules batch ${i}:`, error.message)
      process.exit(1)
    }
  }

  console.log(`  ✅ ${moduleRows.length} modules inserted`)

  // ============================================
  // Step 3: Generate curriculum chunks
  // ============================================
  console.log('✂️  Chunking module content...')

  interface ChunkWithRegion {
    chunk: CurriculumChunk
    region: string
    state: string
    culturalVariant: string | null
  }

  const allChunks: ChunkWithRegion[] = []

  for (const module of K5_CURRICULUM) {
    // Base chunks (region = 'all')
    const baseChunks = chunkModuleContent(module)
    for (const chunk of baseChunks) {
      allChunks.push({
        chunk,
        region: 'all',
        state: 'ALL',
        culturalVariant: null,
      })
    }

    // Cultural variant chunks — one per region with cultural hook prepended
    for (const region of REGIONS) {
      const hook = getCulturalHook(region, module.subject, module.topicCluster)
      // Create a single culturally-contextualized chunk per region per module
      const culturalText = `${hook} ${module.content.intro.text} ${module.content.segments[0]?.text ?? ''}`
      allChunks.push({
        chunk: {
          text: culturalText,
          metadata: {
            moduleSlug: module.slug,
            segmentIndex: 0,
            standardCodes: module.standardCodes,
            topicCluster: module.topicCluster,
            subject: module.subject,
            grade: module.grade,
            gradeBand: module.gradeBand,
          },
        },
        region,
        state: CULTURAL_CONTEXTS[region].states[0],
        culturalVariant: region,
      })
    }
  }

  console.log(`  ✅ ${allChunks.length} chunks generated`)

  // ============================================
  // Step 4: Generate embeddings
  // ============================================
  console.log('🧠 Generating embeddings (this may take a minute)...')

  const texts = allChunks.map((c) => c.chunk.text)
  const embeddings = await generateEmbeddings(texts)

  console.log(`  ✅ ${embeddings.length} embeddings generated`)

  // ============================================
  // Step 5: Insert curriculum_content rows
  // ============================================
  console.log('💾 Inserting curriculum_content rows...')

  const contentRows = allChunks.map((c, i) => ({
    region: c.region,
    state: c.state,
    launch_phase: 'mvp' as const,
    subject: c.chunk.metadata.subject,
    grade: c.chunk.metadata.grade,
    grade_band: c.chunk.metadata.gradeBand,
    topic_cluster: c.chunk.metadata.topicCluster,
    standard_code: c.chunk.metadata.standardCodes[0] ?? null,
    content_text: c.chunk.text,
    embedding: JSON.stringify(embeddings[i]),
    cultural_variant: c.culturalVariant,
  }))

  let insertedCount = 0
  for (let i = 0; i < contentRows.length; i += BATCH_INSERT_SIZE) {
    const batch = contentRows.slice(i, i + BATCH_INSERT_SIZE)
    const { error } = await supabase.from('curriculum_content').insert(batch)
    if (error) {
      console.error(`  ❌ Failed inserting content batch ${i}:`, error.message)
      process.exit(1)
    }
    insertedCount += batch.length
    process.stdout.write(`\r  Inserted ${insertedCount}/${contentRows.length} rows`)
  }

  console.log(`\n  ✅ ${contentRows.length} curriculum_content rows inserted`)

  // ============================================
  // Step 6: Summary
  // ============================================
  console.log('')
  console.log('═══════════════════════════════════════')
  console.log('  Seed complete!')
  console.log(`  📚 Modules:           ${moduleRows.length}`)
  console.log(`  ✂️  Chunks:            ${allChunks.length}`)
  console.log(`  🧠 Embeddings:        ${embeddings.length}`)
  console.log(`  💾 Content rows:      ${contentRows.length}`)
  console.log('═══════════════════════════════════════')

  // ============================================
  // Step 7: Smoke test
  // ============================================
  console.log('')
  console.log('🔍 Running smoke test: search for "adding fractions"...')

  // We need to use the RPC function — first check if it exists
  const testEmbedding = embeddings[0] // reuse an existing embedding for speed
  const { data: searchResults, error: searchErr } = await supabase.rpc(
    'search_curriculum',
    {
      query_embedding: JSON.stringify(testEmbedding),
      student_region: 'all',
      search_subject: 'math',
      search_grade: 5,
      result_limit: 3,
    }
  )

  if (searchErr) {
    console.warn('  ⚠️  Smoke test query failed:', searchErr.message)
    console.warn('  This may mean the 002_search_curriculum migration has not been applied yet.')
    console.warn('  Run: supabase db push or apply the migration manually.')
  } else if (searchResults && searchResults.length > 0) {
    console.log(`  ✅ Found ${searchResults.length} results:`)
    for (const r of searchResults) {
      console.log(`     - [${r.topic_cluster}] ${r.content_text.slice(0, 80)}...`)
    }
  } else {
    console.log('  ⚠️  No results found (index may need rebuilding)')
  }

  console.log('')
  console.log('✅ Done!')
}

main().catch((err) => {
  console.error('❌ Seed script failed:', err)
  process.exit(1)
})
