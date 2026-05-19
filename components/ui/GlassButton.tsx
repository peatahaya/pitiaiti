import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md";
};

export function GlassButton({
  children,
  onClick,
  href,
  className,
  type = "button",
  size = "md",
}: Props) {
  const base = cn(
    "inline-flex items-center justify-center",
    "rounded-full",
    size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3",
    "bg-white/10 backdrop-blur-2xl border border-white/20",
    "text-white text-sm font-medium tracking-tight",
    "cursor-pointer select-none",
    "transition-all duration-200 ease-out",
    "hover:bg-white/15 hover:border-white/30 hover:scale-[1.02]",
    "active:scale-[0.98]",
  );

  if (href) {
    return (
      <a href={href} className={cn(base, className)}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, className)}>
      {children}
    </button>
  );
}
