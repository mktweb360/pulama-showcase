import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import zonas from "@/assets/zonas-madrid.jpg";

export const Route = createFileRoute("/zonas-instalacion")({
  head: () => ({
    meta: [
      { title: "Zonas de instalación en Madrid · Pulama" },
      {
        name: "description",
        content:
          "Pulama fabrica e instala puertas lacadas a medida con equipo propio en Madrid capital, zona sur, zona noroeste y sierra.",
      },
      { property: "og:title", content: "Zonas de instalación · Pulama" },
      {
        property: "og:description",
        content: "Madrid capital, zona sur, zona noroeste y sierra: instalador propio, no subcontratado.",
      },
    ],
  }),
  component: ZonasPage,
});

const zonasList = [
  {
    nombre: "Madrid capital y zona sur",
    localidades: ["Madrid capital", "Alcorcón", "Leganés", "Fuenlabrada", "Parla", "Pinto", "Valdemoro"],
  },
  {
    nombre: "Zona noroeste y sierra",
    localidades: [
      "Pozuelo de Alarcón",
      "Las Rozas",
      "Aravaca",
      "Alcobendas",
      "San Sebastián de los Reyes",
      "Torrelodones",
      "Galapagar",
      "Guadarrama",
      "Alpedrete",
      "Moralzarzal",
      "Cercedilla",
      "San Lorenzo de El Escorial",
    ],
  },
];

function ZonasPage() {
  return (
    <>
      <section className="relative h-[38vh] min-h-[300px] overflow-hidden">
        <img
          src={zonas}
          alt="Pasillo de una vivienda de Madrid con puertas lacadas blancas instaladas por Pulama"
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
              <span className="text-ink-foreground">Zonas de instalación</span>
            </nav>
            <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
              Madrid capital y área metropolitana
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Medimos, fabricamos e instalamos con equipo propio —nunca una subcontrata— en toda esta zona.
          Reunimos aquí todas las localidades en una sola página en lugar de una página distinta por cada
          pueblo: así encuentras la información sin duplicados y nosotros la mantenemos siempre al día.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {zonasList.map((z, i) => (
            <Reveal key={z.nombre} delay={i * 80}>
              <div className="h-full border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-accent" aria-hidden />
                  <h2 className="text-2xl">{z.nombre}</h2>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  {z.localidades.map((l) => (
                    <li key={l} className="border-l-2 border-border pl-3">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-border bg-lino p-8">
          <div>
            <h2 className="text-2xl">¿Tu localidad no aparece en la lista?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Escríbenos igualmente: si está dentro de la Comunidad de Madrid, en la mayoría de los casos
              podemos fabricar e instalar tu pedido.
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
