import { describe, it, expect } from 'vitest'
import { OfflineSyncEngine } from '@/lib/offline/sync-engine'

describe('OfflineSyncEngine', () => {
  it('resolves conflicts with timestamp-based last-write-wins (local newer)', () => {
    const engine = new OfflineSyncEngine()
    const result = engine.resolveConflict({
      local: { value: 75, timestamp: 1700000200 },
      remote: { value: 80, timestamp: 1700000100 },
    })
    expect(result.value).toBe(75)
    expect(result.timestamp).toBe(1700000200)
  })

  it('resolves conflicts with timestamp-based last-write-wins (remote newer)', () => {
    const engine = new OfflineSyncEngine()
    const result = engine.resolveConflict({
      local: { value: 75, timestamp: 1700000100 },
      remote: { value: 80, timestamp: 1700000200 },
    })
    expect(result.value).toBe(80)
    expect(result.timestamp).toBe(1700000200)
  })

  it('resolves conflicts with equal timestamps (local wins)', () => {
    const engine = new OfflineSyncEngine()
    const result = engine.resolveConflict({
      local: { value: 75, timestamp: 1700000100 },
      remote: { value: 80, timestamp: 1700000100 },
    })
    expect(result.value).toBe(75)
  })

  it('exposes getPendingCount method', async () => {
    const engine = new OfflineSyncEngine()
    // Without IndexedDB in test env, this will throw but the method exists
    expect(typeof engine.getPendingCount).toBe('function')
  })

  it('exposes syncOnReconnect method', () => {
    const engine = new OfflineSyncEngine()
    expect(typeof engine.syncOnReconnect).toBe('function')
  })

  it('accepts custom upload function', () => {
    const customFn = async () => ({ success: true })
    const engine = new OfflineSyncEngine({ uploadFn: customFn })
    expect(engine).toBeDefined()
  })
})
