import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticulo, getArticulosDeCategoria } from "@/lib/blog";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/blog/$categoria/$articulo")({
  loader: ({ params }) => {
    const result = getArticulo(params.categoria, params.articulo);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artículo no disponible · Pulama" }, { name: "robots", content: "noindex" }] };
    }
    const { articulo } = loaderData;
    return {
      meta: [
        { title: `${articulo.titulo} · Blog Pulama` },
        { name: "description", content: articulo.resumen },
        { property: "og:title", content: articulo.titulo },
        { property: "og:description", content: articulo.resumen },
        { property: "og:image", content: articulo.imagen },
      ],
    };
  },
  component: ArticuloPage,
});

function ArticuloPage() {
  const { categoria, articulo } = Route.useLoaderData();
  const otros = getArticulosDeCategoria(categoria.slug).filter((a) => a.slug !== articulo.slug);

  return (
    <>
      <div className="mx-auto max-w-[900px] px-5 pt-8 sm:px-8">
        <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Inicio
          </Link>
          <span className="px-2">›</span>
          <Link to="/blog" className="hover:text-accent">
            Blog
          </Link>
          <span className="px-2">›</span>
          <Link to="/blog/$categoria" params={{ categoria: categoria.slug }} className="hover:text-accent">
            {categoria.nombre}
          </Link>
        </nav>

        <p className="eyebrow mt-8">{categoria.nombre}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{articulo.titulo}</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{articulo.resumen}</p>
      </div>

      <div className="mx-auto mt-10 max-w-[1100px] px-5 sm:px-8">
        <div className="aspect-[16/9] overflow-hidden bg-lino">
          <img src={articulo.imagen} alt={articulo.titulo} className="size-full object-cover" />
        </div>
      </div>

      <article className="mx-auto max-w-[720px] px-5 py-14 sm:px-8">
        {articulo.cuerpo.map((parrafo, i) => (
          <p key={i} className="mb-6 text-base leading-relaxed last:mb-0">
            {parrafo}
          </p>
        ))}

        <div className="mt-14 border border-border bg-lino p-8">
          <h2 className="text-xl">¿Listo para pedir presupuesto?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cuéntanos tu proyecto y te damos precio de fabricante y plazo real de fabricación.
          </p>
          <Cta to="/contacto" variant="accent" className="mt-6">
            Solicitar presupuesto
          </Cta>
        </div>
      </article>

      {otros.length > 0 && (
        <div className="border-t border-border bg-lino">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
            <p className="eyebrow">Más en {categoria.nombre.toLowerCase()}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otros.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$categoria/$articulo"
                  params={{ categoria: categoria.slug, articulo: a.slug }}
                  className="group block border border-border bg-card"
                >
                  <div className="media-zoom aspect-[16/10] bg-lino">
                    <img src={a.imagen} alt={a.titulo} loading="lazy" className="size-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg transition-colors group-hover:text-accent">{a.titulo}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
