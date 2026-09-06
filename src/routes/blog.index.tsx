import { createFileRoute, Link } from "@tanstack/react-router";
import { categoriasBlog, getArticulosDeCategoria } from "@/lib/blog";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog · Puertas lacadas, acabados e instalación · Pulama" },
      {
        name: "description",
        content:
          "Guías de compra, decoración e inspiración, e instalación y mantenimiento de puertas lacadas de interior, escritas por el fabricante.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
      <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Link to="/" className="hover:text-accent">
          Inicio
        </Link>
        <span className="px-2">›</span>
        <span className="text-foreground">Blog</span>
      </nav>

      <p className="eyebrow mt-8">Desde el taller</p>
      <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Guías escritas por el fabricante</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Nada de contenido genérico de bricolaje: lo que compartimos aquí sale de nuestro propio proceso de
        fabricación, lacado e instalación en Madrid.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {categoriasBlog.map((c, i) => {
          const articulosCat = getArticulosDeCategoria(c.slug);
          return (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                to="/blog/$categoria"
                params={{ categoria: c.slug }}
                className="group block h-full border border-border bg-card"
              >
                <div className="media-zoom aspect-[16/10] bg-lino">
                  <img src={c.imagen} alt={c.nombre} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl transition-colors group-hover:text-accent">{c.nombre}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.descripcion}</p>
                  <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {articulosCat.length} artículo{articulosCat.length === 1 ? "" : "s"}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
