import { createLink, type LinkComponent } from "@tanstack/react-router";
import { forwardRef, type ComponentProps, type ReactNode } from "react";
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

// Built via TanStack Router's `createLink` so that route-specific `params`/`search` typing
// (eg. the measurements passed from a product page into /contacto) is preserved through the
// wrapper, instead of collapsing to a generic `Link` shape.
// https://tanstack.com/router/latest/docs/framework/react/guide/custom-link
interface CtaAnchorProps extends ComponentProps<"a"> {
  variant?: Variant;
}

const CtaAnchor = forwardRef<HTMLAnchorElement, CtaAnchorProps>(
  ({ variant = "solid", className, children, ...props }, ref) => (
    <a ref={ref} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  ),
);

const CreatedCtaLink = createLink(CtaAnchor);

export const Cta: LinkComponent<typeof CtaAnchor> = (props) => <CreatedCtaLink {...props} />;

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
