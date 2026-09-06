import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const contactoSearchSchema = z.object({
  modelo: z.string().optional(),
  categoria: z.string().optional(),
  acabado: z.string().optional(),
  ancho: z.string().optional(),
  alto: z.string().optional(),
  grosor: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  validateSearch: contactoSearchSchema,
  head: () => ({
    meta: [
      { title: "Solicitar presupuesto · Pulama" },
      {
        name: "description",
        content:
          "Solicita presupuesto de puertas lacadas a medida en Madrid. Fabricante directo, respuesta con precio orientativo y plazo de fabricación.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const search = Route.useSearch();
  const tieneContexto = Boolean(search.modelo);

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    zona: "",
    mensaje: search.modelo
      ? `Me interesa el modelo ${search.modelo} (${search.categoria ?? ""}), acabado ${
          search.acabado ?? ""
        }, medidas aproximadas ${search.ancho ?? ""} x ${search.alto ?? ""} x ${search.grosor ?? ""}.`
      : "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    // Nota de implementación: este formulario está listo en el front-end pero aún no está conectado
    // a un backend/CRM real. Conectar aquí con el proveedor de envío definitivo (p. ej. una función
    // serverless que reenvíe a presupuestos@pulama.es, o un CRM como HubSpot) antes de publicar a producción.
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
        <span className="text-foreground">Contacto</span>
      </nav>

      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Presupuesto sin compromiso</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Cuéntanos qué necesitas</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Respondemos con un precio orientativo y el plazo real de fabricación —aproximadamente 3 meses,
            al ser a medida—. Si prefieres que midamos en tu casa antes de dar cifra final, pide{" "}
            <Link to="/cita-previa" className="text-accent underline underline-offset-2">
              cita con el técnico
            </Link>
            .
          </p>

          <div className="mt-10 space-y-6 border-t border-border pt-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold">presupuestos@pulama.es</p>
                <p className="text-xs text-muted-foreground">Respuesta en día laborable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold">Calle Buendía 27, 28053 Madrid</p>
                <p className="text-xs text-muted-foreground">Taller y showroom de fabricante</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold">Lunes a viernes, 9:00 – 18:00</p>
                <p className="text-xs text-muted-foreground">Madrid capital y área metropolitana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-8 sm:p-10">
          {enviado ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-10 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl">Solicitud recibida</h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Gracias{form.nombre ? `, ${form.nombre}` : ""}. Te contactamos en el próximo día laborable
                con precio orientativo y plazo de fabricación.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              {tieneContexto && (
                <div className="border border-accent/30 bg-lino px-4 py-3 text-sm">
                  Presupuesto para <strong>{search.modelo}</strong>
                  {search.acabado ? ` · acabado ${search.acabado}` : ""}
                  {search.ancho ? ` · ${search.ancho} × ${search.alto} × ${search.grosor}` : ""}
                </div>
              )}

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
                  Email *
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                  Zona de Madrid
                </span>
                <input
                  value={form.zona}
                  onChange={(e) => setForm((f) => ({ ...f, zona: e.target.value }))}
                  placeholder="Ej. Chamberí, Pozuelo, Las Rozas…"
                  className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                  Cuéntanos qué necesitas *
                </span>
                <textarea
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                  className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
              >
                {enviando ? "Enviando…" : "Enviar solicitud"}
              </button>
              <p className="text-xs text-muted-foreground">
                * Campos obligatorios. No compartimos tus datos con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
