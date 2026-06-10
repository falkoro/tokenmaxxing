import { cn } from "@/lib/utils"

interface NavButtonProps {
  isActive: boolean
  onClick: () => void
  onContextMenu?: (e: React.MouseEvent) => void
  children: React.ReactNode
  "aria-label"?: string
}

export function NavButton({
  isActive,
  onClick,
  onContextMenu,
  children,
  "aria-label": ariaLabel,
}: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onContextMenu={onContextMenu}
      aria-label={ariaLabel}
      className={cn(
        "relative flex items-center justify-center w-full p-2.5 transition-colors",
        "hover:bg-accent",
        isActive
          ? "nav-border-beam text-foreground bg-accent/70 dark:bg-muted/90"
          : "text-muted-foreground"
      )}
    >
      {children}
    </button>
  )
}