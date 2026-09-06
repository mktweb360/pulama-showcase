import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getCategoria } from "@/lib/catalogo";
import { ProductCard } from "@/components/site/ProductCard";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/catalogo/$categoria/")({
  loader: ({ params }) => {
    const categoria = getCategoria(params.categoria);
    if (!categoria) throw notFound();
    return { categoria };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Categoría no disponible · Pulama" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.categoria;
    return {
      meta: [
        { title: `${c.tituloSeo} · Pulama` },
        { name: "description", content: c.descripcion },
        { property: "og:title", content: `${c.nombre} lacadas a medida · Pulama` },
        { property: "og:description", content: c.descripcion },
      ],
    };
  },
  component: CategoriaPage,
});

function CategoriaPage() {
  const { categoria } = Route.useLoaderData();
  const [filtro, setFiltro] = useState<string>("Todos");

  const productos =
    filtro === "Todos" ? categoria.productos : categoria.productos.filter((p) => p.variante === filtro);

  return (
    <>
      <section className="relative h-[46vh] min-h-[340px] overflow-hidden">
        <img
          src={categoria.imagen}
          alt={categoria.tituloSeo}
          className="size-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8">
            <nav
              aria-label="Migas de pan"
              className="text-[0.68rem] uppercase tracking-[0.16em] text-ink-foreground/70"
            >
              <Link to="/" className="hover:text-ink-foreground">
                Inicio
              </Link>
              <span className="px-2">›</span>
              <Link to="/catalogo" className="hover:text-ink-foreground">
                Catálogo
              </Link>
              <span className="px-2">›</span>
              <span className="text-ink-foreground">{categoria.nombre}</span>
            </nav>
            <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">{categoria.nombre}</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{categoria.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-border py-4">
          <span className="eyebrow mr-2">Filtrar</span>
          {["Todos", ...categoria.variantes].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setFiltro(v)}
              className={`rounded-sm border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                filtro === v
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {v}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {productos.length} modelo{productos.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} categoria={categoria.slug} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-border bg-lino p-8">
          <div>
            <h2 className="text-2xl">¿No ves tu medida?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Todo el catálogo se fabrica a medida. Cuéntanos el hueco y el acabado y te damos precio de
              fabricante. Plazo de fabricación aproximado: 3 meses.
            </p>
          </div>
          <Cta to="/contacto" variant="accent">
            Solicitar presupuesto
          </Cta>
        </div>
      </div>
    </>
  );
}
