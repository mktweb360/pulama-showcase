import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, CheckCircle2, Ruler, Wrench } from "lucide-react";

export const Route = createFileRoute("/cita-previa")({
  head: () => ({
    meta: [
      { title: "Cita previa con el técnico · Pulama" },
      {
        name: "description",
        content:
          "Pide una visita de nuestro técnico instalador para medir el hueco real de tu puerta antes de fabricar. Sin compromiso, en Madrid y área metropolitana.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: CitaPreviaPage,
});

const pasos = [
  {
    icon: CalendarCheck,
    titulo: "Eliges día y franja",
    texto: "Mañana o tarde, entre semana. Confirmamos por teléfono antes de la visita.",
  },
  {
    icon: Ruler,
    titulo: "Medimos el hueco real",
    texto: "Nuestro técnico —no una subcontrata— comprueba plomos, ancho, alto y grosor exactos.",
  },
  {
    icon: Wrench,
    titulo: "Te damos precio cerrado",
    texto: "Con la medida real y el acabado elegido, precio final y fecha de fabricación por escrito.",
  },
];

function CitaPreviaPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    franja: "Mañana",
    fecha: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    // Nota de implementación: pendiente de conectar a backend/CRM real (igual que /contacto).
    window.setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 600);
  };

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
      <nav aria-label="Migas de pan" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Link to="/" className="hover:text-accent">
          Inicio
        </Link>
        <span className="px-2">›</span>
        <span className="text-foreground">Cita previa</span>
      </nav>

      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Antes de fabricar</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Medimos en tu casa, sin compromiso</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            La medida de catálogo es orientativa: cada hueco de vivienda antigua o de obra nueva tiene sus
            particularidades. Con la visita técnica evitas sorpresas de última hora.
          </p>

          <ol className="mt-10 space-y-7 border-t border-border pt-8">
            {pasos.map((p, i) => (
              <li key={p.titulo} className="flex gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                  <p.icon className="size-4" aria-hidden />
                </div>
                <div>
                  <p className="text-[0.68rem] tracking-[0.2em] text-muted-foreground">PASO 0{i + 1}</p>
                  <h2 className="mt-1 text-lg">{p.titulo}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-border bg-card p-8 sm:p-10">
          {enviado ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-10 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl">Cita solicitada</h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Te llamamos en el próximo día laborable para confirmar día y franja horaria exactos.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Nombre *
                  </span>
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Teléfono *
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                    className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                  Dirección de la visita *
                </span>
                <input
                  required
                  value={form.direccion}
                  onChange={(e) => setForm((f) => ({ ...f, direccion: e.target.value }))}
                  placeholder="Calle, número, localidad"
                  className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Fecha preferida
                  </span>
                  <input
                    type="date"
                    value={form.fecha}
                    onChange={(e) => setForm((f) => ({ ...f, fecha: e.target.value }))}
                    className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Franja horaria
                  </span>
                  <select
                    value={form.franja}
                    onChange={(e) => setForm((f) => ({ ...f, franja: e.target.value }))}
                    className="mt-1 w-full appearance-none rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                  >
                    <option>Mañana</option>
                    <option>Tarde</option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
              >
                {enviando ? "Enviando…" : "Solicitar cita"}
              </button>
              <p className="text-xs text-muted-foreground">
                * Campos obligatorios. Servicio de medición en Madrid capital y área metropolitana.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
