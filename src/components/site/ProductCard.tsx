import { Link } from "@tanstack/react-router";
import { precioTexto, type Producto } from "@/lib/catalogo";

export function ProductCard({
  producto,
  categoria,
}: {
  producto: Producto;
  categoria: string;
}) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card">
      <Link
        to="/catalogo/$categoria/$producto"
        params={{ categoria, producto: producto.slug }}
        className="media-zoom block aspect-[4/5] bg-lino"
      >
        <img
          src={producto.galeria[0]}
          alt={`${producto.nombre} — puerta lacada Pulama`}
          loading="lazy"
          className="size-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{producto.variante}</p>
        <h3 className="mt-2 text-xl">
          <Link
            to="/catalogo/$categoria/$producto"
            params={{ categoria, producto: producto.slug }}
            className="transition-colors group-hover:text-accent"
          >
            {producto.nombre}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{producto.spec}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <span className="text-sm font-semibold">{precioTexto(producto.desde)}</span>
          <Link
            to="/catalogo/$categoria/$producto"
            params={{ categoria, producto: producto.slug }}
            className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
    </article>
  );
}
