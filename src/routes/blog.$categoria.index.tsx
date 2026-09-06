import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategoriaBlog, getArticulosDeCategoria } from "@/lib/blog";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$categoria/")({
  loader: ({ params }) => {
    const categoria = getCategoriaBlog(params.categoria);
    if (!categoria) throw notFound();
    return { categoria, articulos: getArticulosDeCategoria(params.categoria) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Categoría no disponible · Pulama" }, { name: "robots", content: "noindex" }] };
    }
    const { categoria } = loaderData;
    return {
      meta: [
        { title: `${categoria.nombre} · Blog Pulama` },
        { name: "description", content: categoria.descripcion },
      ],
    };
  },
  component: BlogCategoriaPage,
});

function BlogCategoriaPage() {
  const { categoria, articulos } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
      <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Link to="/" className="hover:text-accent">
          Inicio
        </Link>
        <span className="px-2">›</span>
        <Link to="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="px-2">›</span>
        <span className="text-foreground">{categoria.nombre}</span>
      </nav>

      <p className="eyebrow mt-8">Blog</p>
      <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">{categoria.nombre}</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{categoria.descripcion}</p>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {articulos.map((a, i) => (
          <Reveal key={a.slug} delay={i * 80}>
            <Link
              to="/blog/$categoria/$articulo"
              params={{ categoria: categoria.slug, articulo: a.slug }}
              className="group grid gap-5 border border-border bg-card p-6 sm:grid-cols-[200px_1fr] sm:items-center"
            >
              <div className="media-zoom aspect-[4/3] bg-lino">
                <img src={a.imagen} alt={a.titulo} loading="lazy" className="size-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl transition-colors group-hover:text-accent">{a.titulo}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.resumen}</p>
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Leer artículo
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
        {articulos.length === 0 && (
          <p className="text-sm text-muted-foreground">Próximamente publicaremos artículos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}
