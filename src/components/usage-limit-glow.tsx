import { useRef, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type UsageLimitGlowProps = {
  active: boolean
  accentColor?: string
  children: ReactNode
}

/** Cursor-following radial glow when usage is near the limit. */
export function UsageLimitGlow({ active, accentColor, children }: UsageLimitGlowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node || !active) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--glow-x", `${event.clientX - rect.left}px`)
    node.style.setProperty("--glow-y", `${event.clientY - rect.top}px`)
  }

  const glowStyle = accentColor
    ? ({ "--glow-color": accentColor } as CSSProperties)
    : undefined

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(active && "usage-limit-glow")}
      style={glowStyle}
    >
      {children}
    </div>
  )
}