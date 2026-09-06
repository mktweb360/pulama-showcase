import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { categorias } from "@/lib/catalogo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div>
          <span className="font-display text-3xl">Pulama</span>
          <p className="mt-2 text-[0.62rem] tracking-[0.24em] uppercase opacity-60">
            Puertas Lacadas Madrid
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-75">
            Fabricante directo de puertas lacadas de interior en madera maciza. Taller, lacado al horno e
            instalador propio en Madrid.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm">
            <Star className="size-3.5 fill-current" aria-hidden /> 4,8 / 5 · 258 reseñas en Google
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase opacity-60">Catálogo</p>
          <ul className="mt-4 space-y-2 text-sm">
            {categorias.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/catalogo/$categoria"
                  params={{ categoria: c.slug }}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase opacity-60">Pulama</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/zonas-instalacion" className="opacity-80 hover:opacity-100">
                Zonas de instalación
              </Link>
            </li>
            <li>
              <Link to="/blog" className="opacity-80 hover:opacity-100">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/cita-previa" className="opacity-80 hover:opacity-100">
                Cita con técnico instalador
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="opacity-80 hover:opacity-100">
                Contacto y presupuesto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase opacity-60">Taller</p>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            Madrid y área metropolitana
            <br />
            Lunes a viernes, 9:00 – 18:00
          </p>
          <p className="mt-4 text-sm leading-relaxed opacity-60">
            Plazo medio de fabricación a medida: aproximadamente 3 meses.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-[0.7rem] uppercase tracking-[0.14em] opacity-55 sm:px-8">
          <span>© {new Date().getFullYear()} Pulama · Puertas Lacadas Madrid</span>
          <span>Fabricación a medida · Sin intermediarios</span>
        </div>
      </div>
    </footer>
  );
}
