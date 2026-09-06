import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300";

const styles = {
  solid: "bg-ink text-ink-foreground hover:bg-accent",
  accent: "bg-accent text-accent-foreground hover:brightness-110",
  outline: "border border-ink/25 text-foreground hover:border-accent hover:text-accent",
  ghost: "text-accent hover:gap-3",
} as const;

type Variant = keyof typeof styles;

export function Cta({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={cn(base, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
