import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { getProducto, precioTexto, acabadosPulama } from "@/lib/catalogo";
import { ProductCard } from "@/components/site/ProductCard";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/catalogo/$categoria/$producto")({
  loader: ({ params }) => {
    const result = getProducto(params.categoria, params.producto);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Modelo no disponible · Pulama" }, { name: "robots", content: "noindex" }] };
    }
    const { categoria, producto } = loaderData;
    const title = `${producto.nombre} — ${categoria.nombre} a medida · Pulama`;
    return {
      meta: [
        { title },
        { name: "description", content: producto.descripcion },
        { property: "og:title", content: title },
        { property: "og:description", content: producto.descripcion },
        { property: "og:image", content: producto.galeria[0] },
      ],
    };
  },
  component: ProductoPage,
});

const anchos = ["62,5 cm", "72,5 cm", "82,5 cm", "92,5 cm"];
const altos = ["203 cm", "210 cm", "220 cm", "230 cm", "240 cm", "250 cm"];
const grosores = ["35 mm", "40 mm"];

function ProductoPage() {
  const { categoria, producto } = Route.useLoaderData();

  const [activa, setActiva] = useState(0);
  const [acabado, setAcabado] = useState(acabadosPulama[0]?.id ?? "blanco");
  const [ancho, setAncho] = useState(anchos[0]);
  const [alto, setAlto] = useState(altos[1]);
  const [grosor, setGrosor] = useState(grosores[1]);

  // acabadosPulama is a fixed, non-empty catalog constant, so the fallback below never
  // actually applies -- it only satisfies noUncheckedIndexedAccess.
  const acabadoElegido = acabadosPulama.find((a) => a.id === acabado) ?? acabadosPulama[0]!;

  const otros = categoria.productos.filter((p) => p.slug !== producto.slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-8">
        <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Inicio
          </Link>
          <span className="px-2">›</span>
          <Link to="/catalogo" className="hover:text-accent">
            Catálogo
          </Link>
          <span className="px-2">›</span>
          <Link to="/catalogo/$categoria" params={{ categoria: categoria.slug }} className="hover:text-accent">
            {categoria.nombre}
          </Link>
          <span className="px-2">›</span>
          <span className="text-foreground">{producto.nombre}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-14">
        {/* Galería */}
        <div>
          <div className="media-zoom aspect-[4/5] bg-lino">
            <img
              key={producto.galeria[activa]}
              src={producto.galeria[activa]}
              alt={`${producto.nombre} — ${categoria.nombre.toLowerCase()} lacada, acabado ${acabadoElegido.nombre.toLowerCase()}`}
              className="reveal size-full object-cover"
            />
          </div>
          {producto.galeria.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {producto.galeria.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiva(i)}
                  aria-label={`Ver foto ${i + 1} de ${producto.nombre}`}
                  className={`aspect-[4/5] overflow-hidden border transition-colors ${
                    activa === i ? "border-accent" : "border-border hover:border-ink/30"
                  }`}
                >
                  <img src={src} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="eyebrow">
            {categoria.nombre} · {producto.variante}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{producto.nombre}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{producto.spec}</p>
          <p className="mt-6 font-display text-2xl">{precioTexto(producto.desde)}</p>
          {producto.desde && (
            <p className="mt-1 text-xs text-muted-foreground">
              Precio orientativo por hoja, herrajes incluidos. Presupuesto final según medidas y acabado.
            </p>
          )}

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {producto.descripcion}
          </p>

          <div className="mt-9 border-t border-border pt-8">
            <p className="eyebrow">Acabado</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {acabadosPulama.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAcabado(a.id)}
                  aria-pressed={acabado === a.id}
                  aria-label={`${a.nombre} (${a.ral})`}
                  title={`${a.nombre} — ${a.ral}`}
                  className={`relative flex size-10 items-center justify-center rounded-full border-2 transition-colors ${
                    acabado === a.id ? "border-accent" : "border-transparent"
                  }`}
                >
                  <span
                    className="size-8 rounded-full border border-ink/15"
                    style={{ backgroundColor: a.hex }}
                    aria-hidden
                  />
                  {acabado === a.id && (
                    <Check
                      className={`absolute size-4 ${a.id === "blanco" || a.id === "ral" ? "text-ink" : "text-white"}`}
                      aria-hidden
                    />
                  )}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {acabadoElegido.nombre} · {acabadoElegido.ral}
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="eyebrow">Medidas</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">Ancho</span>
                <select
                  value={ancho}
                  onChange={(e) => setAncho(e.target.value)}
                  className="mt-1 w-full appearance-none rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-accent focus:outline-none"
                >
                  {anchos.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">Alto</span>
                <select
                  value={alto}
                  onChange={(e) => setAlto(e.target.value)}
                  className="mt-1 w-full appearance-none rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-accent focus:outline-none"
                >
                  {altos.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">Grosor</span>
                <select
                  value={grosor}
                  onChange={(e) => setGrosor(e.target.value)}
                  className="mt-1 w-full appearance-none rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-accent focus:outline-none"
                >
                  {grosores.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              ¿Tu hueco no coincide con estas medidas? Igual fabricamos fuera de rango — indícalo en el
              presupuesto.
            </p>
          </div>

          <div className="mt-9">
            <Cta
              to="/contacto"
              variant="accent"
              className="w-full sm:w-auto"
              search={{
                modelo: producto.nombre,
                categoria: categoria.nombre,
                acabado: acabadoElegido.nombre,
                ancho,
                alto,
                grosor,
              }}
            >
              Solicitar presupuesto con estas medidas
            </Cta>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="eyebrow">Ficha técnica</p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {producto.ficha.map((f) => (
                  <tr key={f.etiqueta} className="border-b border-border last:border-0">
                    <td className="w-40 py-3 pr-4 align-top text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      {f.etiqueta}
                    </td>
                    <td className="py-3 leading-relaxed">{f.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {otros.length > 0 && (
        <div className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="border-t border-border pt-14">
            <p className="eyebrow">También en {categoria.nombre.toLowerCase()}</p>
            <h2 className="mt-3 text-3xl">Otros modelos de esta familia</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otros.map((p) => (
                <ProductCard key={p.slug} producto={p} categoria={categoria.slug} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-lino">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-5 py-14 sm:px-8">
          <div>
            <h2 className="text-2xl">¿Dudas antes de pedir presupuesto?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Pide una visita de nuestro técnico para medir el hueco real y resolver dudas de acabado in
              situ, sin compromiso.
            </p>
          </div>
          <Cta to="/cita-previa" variant="outline">
            Pedir cita con el técnico
          </Cta>
        </div>
      </div>
    </>
  );
}
