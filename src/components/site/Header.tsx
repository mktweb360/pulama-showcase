import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { categorias } from "@/lib/catalogo";
import { Cta } from "./Cta";

const nav = [
  { to: "/catalogo", label: "Catálogo" },
  { to: "/zonas-instalacion", label: "Zonas" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2 text-[0.68rem] tracking-[0.14em] uppercase sm:px-8">
          <span>Fabricante directo · Taller propio en Madrid</span>
          <span className="hidden items-center gap-2 sm:flex">
            <Star className="size-3 fill-current" aria-hidden />
            4,8 / 5 · 258 reseñas en Google
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link to="/" className="leading-none">
            <span className="font-display text-2xl tracking-tight">Pulama</span>
            <span className="mt-1 block text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground">
              Puertas lacadas Madrid
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[0.78rem] font-semibold tracking-[0.14em] uppercase lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-foreground/80 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Cta to="/contacto" variant="accent" className="hidden md:inline-flex">
              Solicitar presupuesto
            </Cta>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              className="p-2 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
            <p className="eyebrow">Catálogo</p>
            <ul className="mt-3 space-y-2">
              {categorias.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/catalogo/$categoria"
                    params={{ categoria: c.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-lg font-display"
                  >
                    {c.nombre}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4">
              {nav.slice(1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-semibold uppercase tracking-[0.14em]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Cta to="/contacto" variant="accent" className="mt-6 w-full" onClick={() => setOpen(false)}>
              Solicitar presupuesto
            </Cta>
          </div>
        )}
      </header>
    </>
  );
}
