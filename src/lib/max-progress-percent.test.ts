import { describe, expect, it } from "vitest"
import { maxProgressPercent, primaryProgressAccent } from "@/lib/max-progress-percent"
import type { MetricLine } from "@/lib/plugin-types"

describe("maxProgressPercent", () => {
  it("returns highest progress ratio across lines", () => {
    const lines: MetricLine[] = [
      { type: "progress", label: "Session", used: 30, limit: 100 },
      { type: "progress", label: "Weekly", used: 91, limit: 100, color: "#ef4444" },
      { type: "text", label: "Plan", value: "Pro" },
    ]
    expect(maxProgressPercent(lines)).toBe(91)
  })

  it("ignores invalid limits", () => {
    const lines: MetricLine[] = [
      { type: "progress", label: "Broken", used: 50, limit: 0 },
    ]
    expect(maxProgressPercent(lines)).toBe(0)
  })
})

describe("primaryProgressAccent", () => {
  it("returns the first progress line color", () => {
    const lines: MetricLine[] = [
      { type: "text", label: "Plan", value: "Pro" },
      { type: "progress", label: "Weekly", used: 50, limit: 100, color: "#06b6d4" },
    ]
    expect(primaryProgressAccent(lines)).toBe("#06b6d4")
  })
})