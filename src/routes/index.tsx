import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Ruler, Factory, Paintbrush, Wrench, ArrowRight } from "lucide-react";
import { categorias, acabadosPulama } from "@/lib/catalogo";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-hallway.jpg";
import taller from "@/assets/taller-lacado.jpg";
import acabadosImg from "@/assets/acabados.jpg";
import zonas from "@/assets/zonas-madrid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulama · Puertas lacadas a medida en Madrid — Fabricante directo" },
      {
        name: "description",
        content:
          "Fabricante directo de puertas lacadas de interior en Madrid: madera maciza, lacado al horno y medidas a medida. 4,8/5 con 258 reseñas. Pide presupuesto.",
      },
      { property: "og:title", content: "Pulama · Puertas lacadas a medida en Madrid" },
      {
        property: "og:description",
        content:
          "Taller propio en Madrid: puertas abatibles, correderas, ocultas, francesas e hidrófugas lacadas al horno, fabricadas a tu medida.",
      },
    ],
  }),
  component: Home,
});

const datos = [
  { valor: "20+", etiqueta: "Años fabricando en Madrid" },
  { valor: "4,8 / 5", etiqueta: "258 reseñas en Google" },
  { valor: "100%", etiqueta: "Madera maciza + DM hidrófugo" },
  { valor: "6", etiqueta: "Familias de producto" },
];

const proceso = [
  {
    icon: Ruler,
    titulo: "Medición en tu casa",
    texto: "Nuestro técnico mide cada hueco real, comprueba plomos y define ancho, alto y grosor de hoja.",
  },
  {
    icon: Factory,
    titulo: "Corte y ensamblado",
    texto: "Estructura de madera maciza con núcleo DM hidrófugo, cortada y ensamblada en nuestro taller.",
  },
  {
    icon: Paintbrush,
    titulo: "Lacado al horno",
    texto: "Cabina y horno propios: imprimación, lijado y capas de laca de poro cerrado que no amarillean.",
  },
  {
    icon: Wrench,
    titulo: "Instalación propia",
    texto: "Instala nuestro equipo, no una subcontrata. Retiramos la puerta antigua y dejamos la obra limpia.",
  },
];

const resenas = [
  {
    texto:
      "Cambiamos las nueve puertas del piso por lacadas en blanco. El acabado es impecable y el precio, muy por debajo de las tiendas de la zona.",
    autor: "Marta G.",
    lugar: "Chamberí, Madrid",
  },
  {
    texto:
      "Nos hicieron dos correderas empotradas con medidas raras. Vinieron a medir, avisaron del plazo desde el principio y cumplieron.",
    autor: "Javier R.",
    lugar: "Las Rozas",
  },
  {
    texto:
      "Buscábamos negro mate y nadie nos lo hacía a medida. Pulama lo lacó en su taller y el resultado es de showroom.",
    autor: "Elena P.",
    lugar: "Pozuelo de Alarcón",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
          <img
            src={hero}
            alt="Puerta lacada negra a medida en el recibidor de una vivienda en Madrid"
            width={1920}
            height={1200}
            className="size-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20">
              <div className="max-w-2xl text-ink-foreground">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] opacity-80">
                  Fabricante directo · Taller en Madrid
                </p>
                <h1 className="mt-5 text-4xl leading-[1.05] sm:text-6xl">
                  Puertas lacadas de interior, fabricadas a tu medida.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed opacity-85">
                  Madera maciza con núcleo DM hidrófugo y lacado al horno en nuestra propia cabina. Sin
                  intermediarios: mejor precio, mejor acabado y personalización real.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Cta to="/catalogo" variant="accent">
                    Ver el catálogo
                  </Cta>
                  <Cta
                    to="/contacto"
                    variant="outline"
                    className="border-ink-foreground/40 text-ink-foreground hover:border-ink-foreground hover:text-ink-foreground"
                  >
                    Solicitar presupuesto
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de confianza */}
      <section className="border-b border-border bg-lino">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {datos.map((d) => (
            <div key={d.etiqueta} className="px-2">
              <p className="font-display text-3xl sm:text-4xl">{d.valor}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{d.etiqueta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departamentos del catálogo */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">El catálogo</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Seis familias, todas a medida</h2>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Ver todo el catálogo <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    alt={`${c.nombre} lacadas a medida en Madrid`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl transition-colors group-hover:text-accent">{c.nombre}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {c.productos.length} modelos
                    </p>
                  </div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Ver modelos
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fabricante directo + proceso */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="media-zoom">
            <img
              src={taller}
              alt="Lacado al horno de una hoja de puerta en el taller de Pulama en Madrid"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] opacity-70">
              Por qué fabricante directo
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Nadie entre tu casa y nuestro taller.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed opacity-80">
              Fabricamos, lacamos e instalamos nosotros. Eso significa precio de fábrica, control total del
              acabado y libertad para adaptar cualquier medida o color RAL. Al ser fabricación a medida, el
              plazo es de aproximadamente 3 meses: lo decimos antes de que preguntes.
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2">
              {proceso.map((p, i) => (
                <li key={p.titulo}>
                  <div className="flex items-center gap-3">
                    <p.icon className="size-5 opacity-70" aria-hidden />
                    <span className="text-[0.68rem] tracking-[0.2em] opacity-55">0{i + 1}</span>
                  </div>
                  <h3 className="mt-3 text-lg">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Colores y acabados */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Colores y acabados</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Cuatro acabados de catálogo y la carta RAL entera</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Blanco 9010, negro 9005, rojo 3009 y marrón 8007, lacados al horno con poro cerrado. Si buscas
              otro tono, igualamos la referencia RAL en cabina y te enseñamos una muestra antes de lacar.
            </p>
            <ul className="mt-9 flex flex-wrap gap-4">
              {acabadosPulama.map((a) => (
                <li key={a.id} className="flex items-center gap-3">
                  <span
                    className="size-9 rounded-full border border-border"
                    style={{ backgroundColor: a.hex }}
                    aria-hidden
                  />
                  <span className="text-xs uppercase tracking-[0.12em]">
                    {a.nombre}
                    <span className="block text-muted-foreground normal-case tracking-normal">{a.ral}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Cta to="/catalogo/$categoria" params={{ categoria: "colores-y-acabados" }} className="mt-10">
              Ver acabados
            </Cta>
          </div>
          <div className="media-zoom">
            <img
              src={acabadosImg}
              alt="Muestras de puertas lacadas en blanco, negro, rojo y marrón"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="border-y border-border bg-lino">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="media-zoom order-2 lg:order-1">
            <img
              src={zonas}
              alt="Pasillo de una vivienda de Madrid con puertas lacadas blancas"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Dónde instalamos</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Madrid capital y área metropolitana</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Medimos e instalamos con equipo propio en Madrid capital, zona sur, zona noroeste y sierra. Una
              sola página con todas las localidades, sin laberintos.
            </p>
            <Cta to="/zonas-instalacion" variant="outline" className="mt-9">
              Ver zonas de instalación
            </Cta>
          </div>
        </div>
      </section>

      {/* Reputación */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Reputación</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">4,8 / 5 con 258 reseñas en Google</h2>
          </div>
          <div className="flex items-center gap-1 text-accent" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resenas.map((r, i) => (
            <Reveal key={r.autor} delay={i * 80}>
              <blockquote className="flex h-full flex-col border border-border bg-card p-8">
                <p className="text-sm leading-relaxed">“{r.texto}”</p>
                <footer className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {r.autor} · {r.lugar}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-5 py-16 sm:px-8">
          <div>
            <h2 className="text-3xl sm:text-4xl">¿Cuántas puertas necesitas?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-85">
              Dinos el número de huecos y el acabado que te gusta. Te damos precio de fabricante y una fecha
              realista de entrega, sin compromiso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Cta
              to="/contacto"
              variant="outline"
              className="border-accent-foreground/50 text-accent-foreground hover:border-accent-foreground hover:text-accent-foreground"
            >
              Solicitar presupuesto
            </Cta>
            <Cta to="/cita-previa" className="bg-ink text-ink-foreground hover:bg-ink/85">
              Pedir cita con el técnico
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
