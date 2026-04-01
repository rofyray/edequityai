import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import type { ProgressReport } from '@/types/progress'

/**
 * Generate a PDF progress report for a student.
 * Uses pdf-lib for server-side PDF generation (no browser dependencies).
 */
export async function generateProgressPDF(data: ProgressReport): Promise<Buffer> {
  const pdf = await PDFDocument.create()
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold)

  const page = pdf.addPage([595, 842]) // A4
  const { width, height } = page.getSize()
  let y = height - 50

  const brown = rgb(0.65, 0.49, 0.32)
  const black = rgb(0, 0, 0)
  const gray = rgb(0.4, 0.4, 0.4)

  // Header
  page.drawText('EdEquity AI — Student Progress Report', {
    x: 50, y, size: 18, font: boldFont, color: brown,
  })
  y -= 25

  page.drawText(`Generated: ${new Date(data.generatedAt).toLocaleDateString()}`, {
    x: 50, y, size: 10, font, color: gray,
  })
  y -= 30

  // Student Info
  page.drawText(`Student: ${data.student.fullName}`, { x: 50, y, size: 12, font: boldFont, color: black })
  y -= 18
  page.drawText(`Grade ${data.student.grade === 0 ? 'K' : data.student.grade} • ${data.student.region} • ${data.student.state}`, {
    x: 50, y, size: 10, font, color: gray,
  })
  y -= 30

  // Module Completion
  page.drawText('Module Completion', { x: 50, y, size: 14, font: boldFont, color: brown })
  y -= 20

  for (const mod of data.modules) {
    const pct = mod.total > 0 ? Math.round((mod.completed / mod.total) * 100) : 0
    page.drawText(`${mod.subject.toUpperCase()}: ${mod.completed}/${mod.total} modules (${pct}%) — Avg Score: ${mod.averageScore}%`, {
      x: 70, y, size: 10, font, color: black,
    })
    y -= 16
  }
  y -= 15

  // Mastery by Standard
  page.drawText('Standards Mastery', { x: 50, y, size: 14, font: boldFont, color: brown })
  y -= 20

  // Table header
  page.drawText('Standard', { x: 70, y, size: 9, font: boldFont, color: gray })
  page.drawText('Mastery', { x: 250, y, size: 9, font: boldFont, color: gray })
  page.drawText('Data Pts', { x: 330, y, size: 9, font: boldFont, color: gray })
  page.drawText('Trend', { x: 410, y, size: 9, font: boldFont, color: gray })
  y -= 14

  for (const m of data.mastery.slice(0, 15)) {
    if (y < 100) break // Avoid going off page
    page.drawText(m.standardCode, { x: 70, y, size: 9, font, color: black })
    page.drawText(`${m.masteryPercentage}%`, { x: 250, y, size: 9, font, color: black })
    page.drawText(`${m.dataPoints}`, { x: 330, y, size: 9, font, color: black })
    page.drawText(m.trend, { x: 410, y, size: 9, font, color: gray })
    y -= 13
  }
  y -= 15

  // Recent Activity
  if (y > 150 && data.recentActivity.length > 0) {
    page.drawText('Recent Activity', { x: 50, y, size: 14, font: boldFont, color: brown })
    y -= 20

    for (const act of data.recentActivity.slice(0, 5)) {
      if (y < 80) break
      page.drawText(`${act.moduleTitle} — ${act.score}% (${new Date(act.completedAt).toLocaleDateString()})`, {
        x: 70, y, size: 9, font, color: black,
      })
      y -= 13
    }
  }

  // Footer
  page.drawText('EdEquity AI • Culturally-Adaptive K-12 Learning Platform', {
    x: 50, y: 30, size: 8, font, color: gray,
  })
  page.drawText(`Page 1`, {
    x: width - 80, y: 30, size: 8, font, color: gray,
  })

  const pdfBytes = await pdf.save()
  return Buffer.from(pdfBytes)
}
