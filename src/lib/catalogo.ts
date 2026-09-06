import abatibles from "@/assets/cat-abatibles.jpg";
import correderas from "@/assets/cat-correderas.jpg";
import ocultas from "@/assets/cat-ocultas.jpg";
import francesas from "@/assets/cat-francesas.jpg";
import hidrofugas from "@/assets/cat-hidrofugas.jpg";
import acabados from "@/assets/acabados.jpg";
import roja from "@/assets/puerta-roja.jpg";
import detalle from "@/assets/detalle-canto.jpg";
import hall from "@/assets/hero-hallway.jpg";

export type Acabado = {
  id: string;
  nombre: string;
  ral: string;
  hex: string;
};

export const acabadosPulama: Acabado[] = [
  { id: "blanco", nombre: "Blanco", ral: "RAL 9010", hex: "#f4f1ea" },
  { id: "negro", nombre: "Negro", ral: "RAL 9005", hex: "#17181a" },
  { id: "rojo", nombre: "Rojo lacado", ral: "RAL 3009", hex: "#7a352c" },
  { id: "marron", nombre: "Marrón", ral: "RAL 8007", hex: "#553a26" },
  { id: "ral", nombre: "RAL a medida", ral: "Carta completa", hex: "#b9ad9a" },
];

export type Producto = {
  slug: string;
  nombre: string;
  variante: string;
  spec: string;
  desde: number | null;
  descripcion: string;
  galeria: string[];
  ficha: { etiqueta: string; valor: string }[];
};

export type Categoria = {
  slug: string;
  nombre: string;
  tituloSeo: string;
  descripcion: string;
  intro: string;
  imagen: string;
  variantes: string[];
  productos: Producto[];
};

const fichaBase = (extra: { etiqueta: string; valor: string }[] = []) => [
  { etiqueta: "Material", valor: "Madera maciza de pino + núcleo DM hidrófugo" },
  { etiqueta: "Acabado", valor: "Lacado al horno, poro cerrado (blanco, negro, rojo, marrón o RAL a medida)" },
  ...extra,
  { etiqueta: "Herrajes incluidos", valor: "Bisagras, manilla y cerradura embutida (acero inox o negro mate)" },
  { etiqueta: "Medidas", valor: "A medida: ancho 62,5–92,5 cm · alto hasta 250 cm · grosor de hoja 35 / 40 mm" },
  { etiqueta: "Plazo de fabricación", valor: "Aproximadamente 3 meses (fabricación a medida en nuestro taller de Madrid)" },
  { etiqueta: "Instalación", valor: "Instalador propio de Pulama en Madrid y área metropolitana" },
  { etiqueta: "Garantía", valor: "5 años en lacado y estructura" },
];

export const categorias: Categoria[] = [
  {
    slug: "puertas-abatibles",
    nombre: "Puertas abatibles",
    tituloSeo: "Puertas abatibles lacadas a medida en Madrid",
    descripcion:
      "Puertas abatibles lacadas a medida, fabricadas en nuestro taller de Madrid en madera maciza con lacado al horno.",
    intro:
      "La apertura clásica, resuelta con precisión de taller: hoja de madera maciza con núcleo DM hidrófugo, cantos perfectos y lacado al horno que no amarillea. Cada hoja se fabrica con las medidas exactas de tu hueco.",
    imagen: abatibles,
    variantes: ["Lisa", "Ranurada", "Con vidrio", "Doble hoja"],
    productos: [
      {
        slug: "lisa-9010",
        nombre: "Abatible Lisa 9010",
        variante: "Lisa",
        spec: "Hoja lisa 40 mm · blanco RAL 9010",
        desde: 285,
        descripcion:
          "Nuestro modelo más vendido. Hoja completamente plana, sin molduras ni ranuras, con canto recto y lacado blanco de poro cerrado. Encaja tanto en vivienda nueva como en reforma de piso antiguo.",
        galeria: [abatibles, detalle, hall],
        ficha: fichaBase([{ etiqueta: "Apertura", valor: "Abatible, hoja simple (derecha o izquierda)" }]),
      },
      {
        slug: "ranurada-3l",
        nombre: "Abatible Ranurada 3L",
        variante: "Ranurada",
        spec: "3 ranuras horizontales · 40 mm",
        desde: 320,
        descripcion:
          "Tres ranuras horizontales fresadas en la propia hoja, lacadas junto con el resto de la puerta para que el relieve quede limpio y sin acumular polvo.",
        galeria: [abatibles, detalle],
        ficha: fichaBase([{ etiqueta: "Apertura", valor: "Abatible, hoja simple · ranurado fresado en hoja" }]),
      },
      {
        slug: "negra-9005",
        nombre: "Abatible Negra 9005",
        variante: "Lisa",
        spec: "Hoja lisa · negro RAL 9005 mate",
        desde: 345,
        descripcion:
          "Negro mate sobre hoja lisa, con marco y tapajuntas lacados en el mismo tono. Un acabado exigente: cualquier defecto se ve, por eso se lacan al horno en cabina propia.",
        galeria: [hall, detalle],
        ficha: fichaBase([{ etiqueta: "Apertura", valor: "Abatible, hoja simple · marco lacado a juego" }]),
      },
      {
        slug: "vidriera-cuadros",
        nombre: "Abatible Vidriera",
        variante: "Con vidrio",
        spec: "Vidrio templado mate · 4 cuarterones",
        desde: null,
        descripcion:
          "Para pasillos sin luz natural. Vidrio templado de seguridad, mate o transparente, montado con junquillo lacado a juego con la hoja.",
        galeria: [francesas, abatibles],
        ficha: fichaBase([{ etiqueta: "Apertura", valor: "Abatible con vidrio templado 4 mm (mate o transparente)" }]),
      },
    ],
  },
  {
    slug: "puertas-correderas",
    nombre: "Puertas correderas",
    tituloSeo: "Puertas correderas lacadas: empotrada, guía vista y riel invisible",
    descripcion:
      "Puertas correderas lacadas a medida en Madrid: empotradas en tabique, con guía vista, guía oculta o riel invisible.",
    intro:
      "Cuando no sobra espacio, la corredera gana. Fabricamos las cuatro soluciones —empotrada en tabique, guía vista, guía oculta y riel invisible— con la hoja lacada al horno y el herraje calculado para su peso real.",
    imagen: correderas,
    variantes: ["Empotrada", "Guía vista", "Guía oculta", "Riel invisible"],
    productos: [
      {
        slug: "empotrada-tabique",
        nombre: "Corredera Empotrada",
        variante: "Empotrada",
        spec: "Hoja oculta en tabique · casoneto incluido",
        desde: 495,
        descripcion:
          "La hoja desaparece dentro del tabique. Suministramos el casoneto metálico y ajustamos la hoja al hueco real medido en obra, de modo que el cierre quede a plomo.",
        galeria: [correderas, detalle],
        ficha: fichaBase([{ etiqueta: "Sistema de apertura", valor: "Corredera empotrada con casoneto metálico" }]),
      },
      {
        slug: "guia-vista-negra",
        nombre: "Corredera Guía Vista",
        variante: "Guía vista",
        spec: "Guía de acero a la vista · negro mate",
        desde: 430,
        descripcion:
          "Guía superior a la vista en acero, acabada en negro mate o inox. Solución rápida cuando no se puede tocar el tabique.",
        galeria: [correderas, hall],
        ficha: fichaBase([{ etiqueta: "Sistema de apertura", valor: "Corredera de superficie con guía vista de acero" }]),
      },
      {
        slug: "guia-oculta",
        nombre: "Corredera Guía Oculta",
        variante: "Guía oculta",
        spec: "Guía escondida en cajeado superior",
        desde: 520,
        descripcion:
          "El herraje se aloja en un cajeado superior lacado, así que desde el salón sólo se ve la hoja deslizando. Incluye freno de cierre suave.",
        galeria: [correderas, ocultas],
        ficha: fichaBase([{ etiqueta: "Sistema de apertura", valor: "Corredera con guía oculta y freno de cierre suave" }]),
      },
      {
        slug: "riel-invisible",
        nombre: "Corredera Riel Invisible",
        variante: "Riel invisible",
        spec: "Sin guía visible · hoja hasta 250 cm",
        desde: null,
        descripcion:
          "Nuestra solución más limpia: ni guía ni cajeado a la vista. Requiere medición previa del técnico para comprobar el falso techo o el dintel.",
        galeria: [ocultas, correderas],
        ficha: fichaBase([{ etiqueta: "Sistema de apertura", valor: "Corredera de riel invisible (requiere medición previa)" }]),
      },
    ],
  },
  {
    slug: "puertas-ocultas-sin-marco",
    nombre: "Puertas ocultas sin marco",
    tituloSeo: "Puertas ocultas sin marco lacadas a medida",
    descripcion:
      "Puertas ocultas sin marco, enrasadas con la pared y lacadas al horno en el color del paramento.",
    intro:
      "Enrasadas con el paramento y sin tapajuntas: la puerta se lee como pared. Se lacan en el mismo color del muro —o en un RAL a medida— y se montan sobre premarco de aluminio para que la junta sea mínima y constante.",
    imagen: ocultas,
    variantes: ["Enrasada interior", "Enrasada exterior", "Doble altura"],
    productos: [
      {
        slug: "enrasada-interior",
        nombre: "Oculta Enrasada Interior",
        variante: "Enrasada interior",
        spec: "Premarco de aluminio · junta 3 mm",
        desde: 640,
        descripcion:
          "Abre hacia dentro de la estancia y queda perfectamente al ras del yeso. Sin tapajuntas ni zócalo interrumpido.",
        galeria: [ocultas, detalle],
        ficha: fichaBase([
          { etiqueta: "Sistema", valor: "Hoja enrasada sobre premarco de aluminio, apertura interior" },
        ]),
      },
      {
        slug: "enrasada-exterior",
        nombre: "Oculta Enrasada Exterior",
        variante: "Enrasada exterior",
        spec: "Bisagra oculta 3D regulable",
        desde: 680,
        descripcion:
          "Versión de apertura hacia el pasillo, con bisagra oculta regulable en tres ejes para dejar la junta perfecta tras el asentamiento.",
        galeria: [ocultas, hall],
        ficha: fichaBase([
          { etiqueta: "Sistema", valor: "Hoja enrasada, bisagra oculta 3D regulable, apertura exterior" },
        ]),
      },
      {
        slug: "oculta-doble-altura",
        nombre: "Oculta Doble Altura",
        variante: "Doble altura",
        spec: "Hoja hasta 280 cm de alto",
        desde: null,
        descripcion:
          "Para techos altos de piso señorial. Refuerzo interior adicional para evitar alabeos en hojas de gran formato.",
        galeria: [ocultas, correderas],
        ficha: fichaBase([{ etiqueta: "Sistema", valor: "Hoja enrasada de gran formato con refuerzo interior" }]),
      },
    ],
  },
  {
    slug: "puertas-francesas",
    nombre: "Puertas francesas",
    tituloSeo: "Puertas francesas lacadas con vidrio a medida",
    descripcion:
      "Puertas francesas lacadas de doble hoja con vidrio, fabricadas a medida en Madrid.",
    intro:
      "Doble hoja acristalada, de las que abren un salón en dos. Cuarterones fresados en madera maciza, vidrio templado y lacado al horno: el clásico, sin la fragilidad del clásico.",
    imagen: francesas,
    variantes: ["Doble hoja", "Hoja simple", "Vidrio mate"],
    productos: [
      {
        slug: "francesa-doble-10c",
        nombre: "Francesa Doble 10C",
        variante: "Doble hoja",
        spec: "10 cuarterones por hoja · vidrio templado",
        desde: 890,
        descripcion:
          "Diez cuarterones por hoja con junquillo lacado. Se fabrica en pareja, ajustando el batiente central al hueco real.",
        galeria: [francesas, hall],
        ficha: fichaBase([
          { etiqueta: "Apertura", valor: "Doble hoja abatible con batiente central" },
          { etiqueta: "Vidrio", valor: "Templado 4 mm transparente o mate" },
        ]),
      },
      {
        slug: "francesa-simple-6c",
        nombre: "Francesa Simple 6C",
        variante: "Hoja simple",
        spec: "6 cuarterones · hoja única",
        desde: 465,
        descripcion:
          "La misma composición de cuarterones en hoja única, para pasos de anchura normal que quieren ganar luz.",
        galeria: [francesas, abatibles],
        ficha: fichaBase([
          { etiqueta: "Apertura", valor: "Abatible, hoja simple acristalada" },
          { etiqueta: "Vidrio", valor: "Templado 4 mm transparente o mate" },
        ]),
      },
      {
        slug: "francesa-mate",
        nombre: "Francesa Vidrio Mate",
        variante: "Vidrio mate",
        spec: "Vidrio ácido · paso de luz sin visión",
        desde: null,
        descripcion:
          "Vidrio al ácido: pasa la luz, no la mirada. Habitual entre cocina y pasillo, o en despachos en casa.",
        galeria: [francesas, correderas],
        ficha: fichaBase([
          { etiqueta: "Apertura", valor: "Abatible acristalada, simple o doble" },
          { etiqueta: "Vidrio", valor: "Templado al ácido (mate) 4 mm" },
        ]),
      },
    ],
  },
  {
    slug: "puertas-hidrofugas-antihumedad",
    nombre: "Puertas hidrófugas / antihumedad",
    tituloSeo: "Puertas hidrófugas antihumedad para baño y cocina",
    descripcion:
      "Puertas hidrófugas antihumedad lacadas para baños y cocinas: núcleo DM hidrófugo y lacado al horno estanco.",
    intro:
      "Para baños y cocinas, donde la humedad hincha cualquier puerta corriente. Núcleo DM hidrófugo en toda la hoja, cantos sellados y lacado al horno también en los cantos inferiores, que es por donde entra el agua.",
    imagen: hidrofugas,
    variantes: ["Baño", "Cocina", "Con rejilla de ventilación"],
    productos: [
      {
        slug: "hidrofuga-bano",
        nombre: "Hidrófuga Baño",
        variante: "Baño",
        spec: "DM hidrófugo · canto inferior sellado",
        desde: 330,
        descripcion:
          "Hoja lisa con núcleo hidrófugo y sellado completo de cantos. Condena de baño con indicador libre/ocupado incluida.",
        galeria: [hidrofugas, detalle],
        ficha: fichaBase([
          { etiqueta: "Resistencia a humedad", valor: "Núcleo DM hidrófugo y cantos sellados y lacados" },
          { etiqueta: "Cerradura", valor: "Condena de baño con indicador libre / ocupado" },
        ]),
      },
      {
        slug: "hidrofuga-cocina",
        nombre: "Hidrófuga Cocina",
        variante: "Cocina",
        spec: "Lacado reforzado antivapor",
        desde: 355,
        descripcion:
          "Capa de lacado reforzada, pensada para el vapor continuo y la limpieza frecuente con desengrasante.",
        galeria: [hidrofugas, correderas],
        ficha: fichaBase([
          { etiqueta: "Resistencia a humedad", valor: "Núcleo DM hidrófugo con lacado reforzado antivapor" },
          { etiqueta: "Limpieza", valor: "Apta para limpieza frecuente con producto neutro o desengrasante suave" },
        ]),
      },
      {
        slug: "hidrofuga-rejilla",
        nombre: "Hidrófuga con Rejilla",
        variante: "Con rejilla de ventilación",
        spec: "Rejilla lacada a juego",
        desde: null,
        descripcion:
          "Con rejilla inferior lacada del mismo color, para baños interiores que necesitan renovar aire por norma.",
        galeria: [hidrofugas, abatibles],
        ficha: fichaBase([
          { etiqueta: "Resistencia a humedad", valor: "Núcleo DM hidrófugo, cantos sellados" },
          { etiqueta: "Ventilación", valor: "Rejilla inferior de aluminio lacada a juego con la hoja" },
        ]),
      },
    ],
  },
  {
    slug: "colores-y-acabados",
    nombre: "Colores y acabados",
    tituloSeo: "Colores y acabados: blanco, negro, rojo, marrón y RAL a medida",
    descripcion:
      "Acabados lacados al horno de Pulama: blanco RAL 9010, negro RAL 9005, rojo RAL 3009, marrón RAL 8007 y RAL a medida.",
    intro:
      "Cuatro acabados de catálogo, lacados al horno en nuestra propia cabina, y la carta RAL completa si buscas un tono concreto. Cualquier modelo del catálogo se fabrica en cualquiera de ellos.",
    imagen: acabados,
    variantes: ["Catálogo", "RAL a medida"],
    productos: [
      {
        slug: "blanco-ral-9010",
        nombre: "Blanco RAL 9010",
        variante: "Catálogo",
        spec: "Blanco puro mate · poro cerrado",
        desde: 285,
        descripcion:
          "El blanco de referencia. Lacado al horno de poro cerrado, con pigmento estable que no amarillea con la luz solar.",
        galeria: [abatibles, acabados],
        ficha: fichaBase([{ etiqueta: "Color", valor: "Blanco RAL 9010, brillo 20 (mate seda) o 90 (brillo)" }]),
      },
      {
        slug: "negro-ral-9005",
        nombre: "Negro RAL 9005",
        variante: "Catálogo",
        spec: "Negro mate profundo",
        desde: 345,
        descripcion:
          "Negro profundo mate, con marco y tapajuntas a juego. Muy exigente de fabricación: pide superficie perfecta.",
        galeria: [hall, acabados],
        ficha: fichaBase([{ etiqueta: "Color", valor: "Negro RAL 9005, brillo 10 (mate profundo)" }]),
      },
      {
        slug: "rojo-ral-3009",
        nombre: "Rojo RAL 3009",
        variante: "Catálogo",
        spec: "Rojo óxido lacado",
        desde: 360,
        descripcion:
          "Rojo óxido, el acabado con el que más se identifica Pulama. Funciona especialmente bien sobre pared en tono cal.",
        galeria: [roja, acabados],
        ficha: fichaBase([{ etiqueta: "Color", valor: "Rojo óxido RAL 3009, brillo 20 (mate seda)" }]),
      },
      {
        slug: "marron-ral-8007",
        nombre: "Marrón RAL 8007",
        variante: "Catálogo",
        spec: "Marrón corzo cálido",
        desde: 350,
        descripcion:
          "Marrón cálido para interiores con madera y piedra. Alternativa al chapado natural con la uniformidad del lacado.",
        galeria: [acabados, detalle],
        ficha: fichaBase([{ etiqueta: "Color", valor: "Marrón corzo RAL 8007, brillo 20" }]),
      },
      {
        slug: "ral-a-medida",
        nombre: "RAL a medida",
        variante: "RAL a medida",
        spec: "Carta RAL completa · igualación de color",
        desde: null,
        descripcion:
          "Traes la referencia RAL —o una muestra de tu pared— y la igualamos en cabina antes de lacar toda la serie.",
        galeria: [acabados, ocultas],
        ficha: fichaBase([
          { etiqueta: "Color", valor: "Cualquier referencia de la carta RAL, con muestra previa de validación" },
        ]),
      },
    ],
  },
];

export const getCategoria = (slug: string) => categorias.find((c) => c.slug === slug);

export const getProducto = (catSlug: string, prodSlug: string) => {
  const cat = getCategoria(catSlug);
  if (!cat) return undefined;
  const producto = cat.productos.find((p) => p.slug === prodSlug);
  return producto ? { categoria: cat, producto } : undefined;
};

export const precioTexto = (desde: number | null) =>
  desde ? `Desde ${desde} €` : "Precio a consultar";
