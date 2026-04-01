import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createAutoSave, FetchSaveTransport } from '@/lib/module-player/auto-save'
import type { PlayerSnapshot } from '@/types/module-player'

const mockSnapshot: PlayerSnapshot = {
  moduleId: 'test-module-id',
  phase: 'segment',
  segmentIndex: 2,
  practiceStates: [],
  assessmentStates: [],
  score: null,
  startedAt: '2026-03-30T00:00:00Z',
}

describe('FetchSaveTransport', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))
  })

  it('calls /api/module/progress with correct body', async () => {
    const transport = new FetchSaveTransport()
    await transport.saveProgress(mockSnapshot)

    expect(fetch).toHaveBeenCalledWith('/api/module/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moduleId: 'test-module-id',
        segmentIndex: 2,
        phase: 'segment',
      }),
    })
  })
})

describe('createAutoSave', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('debounces saves by 500ms', () => {
    const mockTransport = { saveProgress: vi.fn().mockResolvedValue(undefined) }
    const save = createAutoSave(mockTransport, 500)

    save(mockSnapshot)
    save(mockSnapshot)
    save(mockSnapshot)

    expect(mockTransport.saveProgress).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)

    expect(mockTransport.saveProgress).toHaveBeenCalledTimes(1)
    expect(mockTransport.saveProgress).toHaveBeenCalledWith(mockSnapshot)
  })

  it('only fires once after rapid calls', () => {
    const mockTransport = { saveProgress: vi.fn().mockResolvedValue(undefined) }
    const save = createAutoSave(mockTransport, 500)

    for (let i = 0; i < 10; i++) {
      save({ ...mockSnapshot, segmentIndex: i })
    }

    vi.advanceTimersByTime(500)

    expect(mockTransport.saveProgress).toHaveBeenCalledTimes(1)
    // Should save the LAST snapshot
    expect(mockTransport.saveProgress).toHaveBeenCalledWith(
      expect.objectContaining({ segmentIndex: 9 })
    )
  })
})
