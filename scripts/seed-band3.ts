/**
 * Seed script: Populate modules + curriculum_content tables with 9-12 curriculum data.
 *
 * Run: npx tsx scripts/seed-band3.ts
 *
 * Idempotent: deletes existing 9-12 MVP data before inserting.
 */

import { createAdminClient } from './lib/supabase-admin'
import { BAND3_CURRICULUM } from '../src/lib/ingestion/curriculum-catalog'
import { chunkModuleContent } from '../src/lib/ingestion/chunker'
import { generateEmbeddings } from '../src/lib/ai/embeddings'
import { CULTURAL_CONTEXTS, getCulturalHook } from '../src/lib/ingestion/cultural-variants'
import type { Region, CurriculumChunk } from '../src/lib/ingestion/types'

const REGIONS: Region[] = ['appalachia', 'delta', 'tribal']
const BATCH_INSERT_SIZE = 50

async function main() {
  console.log('🌱 EdEquity AI — Band 3 (9-12) Curriculum Seed Script')
  console.log(`📚 Modules to seed: ${BAND3_CURRICULUM.length}`)
  console.log('')

  const supabase = createAdminClient()

  // Clean existing 9-12 data
  console.log('🗑️  Cleaning existing 9-12 data...')
  await supabase.from('curriculum_content').delete().eq('grade_band', '9-12').eq('launch_phase', 'mvp')
  await supabase.from('modules').delete().eq('grade_band', '9-12').eq('launch_phase', 'mvp')
  console.log('  ✅ Cleaned')

  // Insert modules
  console.log('📦 Inserting modules...')
  const moduleRows = BAND3_CURRICULUM.map((m) => ({
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
    estimated_minutes: Math.max(18, m.content.segments.length * 5),
    xp_reward: 75,
    content: m.content,
    is_placeholder: false,
    launch_phase: 'mvp',
  }))

  for (let i = 0; i < moduleRows.length; i += BATCH_INSERT_SIZE) {
    const batch = moduleRows.slice(i, i + BATCH_INSERT_SIZE)
    const { error } = await supabase.from('modules').insert(batch)
    if (error) { console.error(`  ❌ Failed:`, error.message); process.exit(1) }
  }
  console.log(`  ✅ ${moduleRows.length} modules inserted`)

  // Chunk + cultural variants
  console.log('✂️  Chunking module content...')
  interface ChunkWithRegion { chunk: CurriculumChunk; region: string; state: string; culturalVariant: string | null }
  const allChunks: ChunkWithRegion[] = []

  for (const module of BAND3_CURRICULUM) {
    const baseChunks = chunkModuleContent(module)
    for (const chunk of baseChunks) {
      allChunks.push({ chunk, region: 'all', state: 'ALL', culturalVariant: null })
    }
    for (const region of REGIONS) {
      const hook = getCulturalHook(region, module.subject, module.topicCluster)
      const culturalText = `${hook} ${module.content.intro.text} ${module.content.segments[0]?.text ?? ''}`
      allChunks.push({
        chunk: { text: culturalText, metadata: { moduleSlug: module.slug, segmentIndex: 0, standardCodes: module.standardCodes, topicCluster: module.topicCluster, subject: module.subject, grade: module.grade, gradeBand: module.gradeBand } },
        region, state: CULTURAL_CONTEXTS[region].states[0], culturalVariant: region,
      })
    }
  }
  console.log(`  ✅ ${allChunks.length} chunks generated`)

  // Embeddings
  console.log('🧠 Generating embeddings...')
  const texts = allChunks.map((c) => c.chunk.text)
  const embeddings = await generateEmbeddings(texts)
  console.log(`  ✅ ${embeddings.length} embeddings generated`)

  // Insert curriculum_content
  console.log('💾 Inserting curriculum_content rows...')
  const contentRows = allChunks.map((c, i) => ({
    region: c.region, state: c.state, launch_phase: 'mvp' as const,
    subject: c.chunk.metadata.subject, grade: c.chunk.metadata.grade, grade_band: c.chunk.metadata.gradeBand,
    topic_cluster: c.chunk.metadata.topicCluster, standard_code: c.chunk.metadata.standardCodes[0] ?? null,
    content_text: c.chunk.text, embedding: JSON.stringify(embeddings[i]), cultural_variant: c.culturalVariant,
  }))

  for (let i = 0; i < contentRows.length; i += BATCH_INSERT_SIZE) {
    const batch = contentRows.slice(i, i + BATCH_INSERT_SIZE)
    const { error } = await supabase.from('curriculum_content').insert(batch)
    if (error) { console.error(`  ❌ Failed:`, error.message); process.exit(1) }
    process.stdout.write(`\r  Inserted ${Math.min(i + BATCH_INSERT_SIZE, contentRows.length)}/${contentRows.length} rows`)
  }

  console.log(`\n  ✅ ${contentRows.length} rows inserted`)
  console.log('')
  console.log('═══════════════════════════════════════')
  console.log(`  Band 3 (9-12) Seed complete!`)
  console.log(`  📚 Modules:    ${moduleRows.length}`)
  console.log(`  ✂️  Chunks:     ${allChunks.length}`)
  console.log(`  🧠 Embeddings: ${embeddings.length}`)
  console.log('═══════════════════════════════════════')
  console.log('✅ Done!')
}

main().catch((err) => { console.error('❌ Failed:', err); process.exit(1) })
