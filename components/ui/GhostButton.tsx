import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function GhostButton({
  children,
  onClick,
  href,
  className,
  type = "button",
}: Props) {
  const base = cn(
    "inline-flex items-center justify-center",
    "px-4 py-3",
    "text-white/70 text-sm font-medium",
    "cursor-pointer select-none",
    "transition-colors duration-200",
    "hover:text-white",
    "relative after:absolute after:bottom-1.5 after:left-4 after:right-4",
    "after:h-px after:bg-white/40 after:scale-x-0 after:origin-left",
    "after:transition-transform after:duration-200",
    "hover:after:scale-x-100",
    className
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
