import { createFileRoute, Link } from "@tanstack/react-router";
import { categorias } from "@/lib/catalogo";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/catalogo/")({
  head: () => ({
    meta: [
      { title: "Catálogo de puertas lacadas a medida · Pulama Madrid" },
      {
        name: "description",
        content:
          "Catálogo completo de puertas lacadas de interior: abatibles, correderas, ocultas sin marco, francesas, hidrófugas antihumedad y acabados RAL.",
      },
      { property: "og:title", content: "Catálogo de puertas lacadas a medida · Pulama" },
      {
        property: "og:description",
        content:
          "Seis familias de puertas lacadas fabricadas en nuestro taller de Madrid, con precio orientativo y presupuesto a medida.",
      },
    ],
  }),
  component: Catalogo,
});

function Catalogo() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
      <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Link to="/" className="hover:text-accent">
          Inicio
        </Link>
        <span className="px-2">›</span>
        <span className="text-foreground">Catálogo</span>
      </nav>

      <h1 className="mt-8 max-w-2xl text-4xl sm:text-5xl">Catálogo de puertas lacadas</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Todos los modelos se fabrican a medida en nuestro taller de Madrid, en cualquiera de nuestros
        acabados lacados al horno. Los precios son orientativos por hoja e incluyen herrajes; el presupuesto
        final depende de medidas, acabado y número de puertas.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60}>
            <Link
              to="/catalogo/$categoria"
              params={{ categoria: c.slug }}
              className="group block border border-border bg-card"
            >
              <div className="media-zoom aspect-[4/5] bg-lino">
                <img
                  src={c.imagen}
                  alt={c.tituloSeo}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl transition-colors group-hover:text-accent">{c.nombre}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.descripcion}</p>
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Ver modelos
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
