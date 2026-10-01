# Pulama — sitio web

Sitio web de Pulama (Puertas Lacadas Madrid), fabricante directo de puertas
lacadas de interior a medida en Madrid.

## Stack

- React 19 + TanStack Start (SSR) + TanStack Router (enrutado por archivos en `src/routes`)
- Tailwind CSS 4
- Componentes UI sobre Radix (patrón shadcn/ui)
- Despliegue: Cloudflare Workers (vía Nitro, preset `cloudflare-module`)

## Desarrollo

```bash
bun install
bun run dev
```

## Build y despliegue

```bash
bun run build
```

El build genera el paquete para Cloudflare Workers en `dist/`.

## Estructura

- `src/routes/` — páginas (enrutado por archivos de TanStack Router)
- `src/components/` — componentes de interfaz
- `src/lib/` — utilidades
- `src/assets/` — imágenes propias del sitio

## Notas

- El catálogo de producto (categorías, modelos, medidas, acabados) refleja
  la información publicada en pulama.es; los precios se solicitan mediante
  formulario de presupuesto, igual que en el sitio anterior.
- Zona de servicio: Madrid capital y área metropolitana.
