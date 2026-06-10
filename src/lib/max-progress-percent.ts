import type { MetricLine } from "@/lib/plugin-types"

export function maxProgressPercent(lines: MetricLine[]): number {
  let max = 0
  for (const line of lines) {
    if (line.type !== "progress" || !line.limit || line.limit <= 0) continue
    const percent = (line.used / line.limit) * 100
    if (percent > max) max = percent
  }
  return max
}

export function primaryProgressAccent(lines: MetricLine[]): string | undefined {
  for (const line of lines) {
    if (line.type === "progress" && line.color) return line.color
  }
  return undefined
}