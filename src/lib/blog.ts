import abatibles from "@/assets/cat-abatibles.jpg";
import correderas from "@/assets/cat-correderas.jpg";
import ocultas from "@/assets/cat-ocultas.jpg";
import acabados from "@/assets/acabados.jpg";
import detalle from "@/assets/detalle-canto.jpg";
import taller from "@/assets/taller-lacado.jpg";

export type Articulo = {
  slug: string;
  categoria: string;
  titulo: string;
  resumen: string;
  imagen: string;
  cuerpo: string[];
};

export type CategoriaBlog = {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
};

export const categoriasBlog: CategoriaBlog[] = [
  {
    slug: "guias-de-compra",
    nombre: "Guías de compra",
    descripcion:
      "Materiales, acabados y sistemas de apertura explicados para decidir con criterio antes de pedir presupuesto.",
    imagen: acabados,
  },
  {
    slug: "decoracion-e-inspiracion",
    nombre: "Decoración e inspiración",
    descripcion: "Cómo combinar acabado, apertura y espacio en proyectos reales de vivienda en Madrid.",
    imagen: ocultas,
  },
  {
    slug: "instalacion-y-mantenimiento",
    nombre: "Instalación y mantenimiento",
    descripcion: "Qué esperar del proceso de medición, instalación y cuidado de una puerta lacada al horno.",
    imagen: taller,
  },
];

export const articulos: Articulo[] = [
  {
    slug: "como-elegir-acabado-lacado",
    categoria: "guias-de-compra",
    titulo: "Cómo elegir el acabado lacado para tus puertas de interior",
    resumen:
      "Blanco, negro, rojo, marrón o RAL a medida: en qué se diferencian y qué tener en cuenta antes de decidir.",
    imagen: acabados,
    cuerpo: [
      "Todas las puertas de nuestro catálogo se lacan al horno en cabina propia, con un proceso de imprimación, lijado y varias capas de laca de poro cerrado. Eso significa que el color no es una película superficial: queda integrado en el acabado y no amarillea con la luz solar, a diferencia de muchos lacados artesanales al aire.",
      "El blanco RAL 9010 es el acabado más solicitado, por ser el que mejor encaja tanto en reforma de piso antiguo como en vivienda de obra nueva. El negro RAL 9005 mate es el más exigente de fabricar: al ser un color oscuro y sin brillo, cualquier imperfección de la superficie se nota, por lo que requiere una preparación de base más cuidadosa.",
      "El rojo óxido RAL 3009 y el marrón corzo RAL 8007 son los dos acabados de color que mejor funcionan sobre paredes en tonos cálidos o con elementos de madera natural, aportando un punto de carácter sin romper con el resto de la decoración.",
      "Si ninguno de los cuatro acabados de catálogo encaja con tu proyecto, trabajamos con la carta RAL completa: nos traes la referencia —o una muestra de tu pared o mobiliario— y la igualamos en cabina antes de lacar el pedido completo, mostrándote una muestra física de validación previa.",
      "Un último punto práctico: el acabado no solo es una decisión estética. En puertas para baño o cocina, el lacado se refuerza específicamente para resistir vapor y humedad constante; lo explicamos con detalle en la ficha de cada modelo de la familia hidrófuga.",
    ],
  },
  {
    slug: "corredera-empotrada-guia-vista-o-guia-oculta",
    categoria: "instalacion-y-mantenimiento",
    titulo: "Corredera empotrada, guía vista o guía oculta: qué sistema elegir",
    resumen:
      "Las tres soluciones correderas de Pulama resuelven problemas distintos. Aquí tienes los criterios reales para decidir.",
    imagen: correderas,
    cuerpo: [
      "Cuando el espacio de apertura de una puerta abatible no es viable, la solución habitual es una corredera. Pero \"corredera\" no es un único sistema: fabricamos cuatro variantes distintas, y cada una responde a una limitación de obra diferente.",
      "La corredera empotrada esconde la hoja dentro del propio tabique, mediante un casoneto metálico que suministramos junto con la hoja. Es la solución más limpia visualmente, pero solo es viable si el tabique se puede abrir en obra —normalmente antes de alicatar o solar—, por lo que en una reforma ya avanzada puede no ser posible.",
      "La guía vista resuelve exactamente ese caso: cuando no se puede tocar el tabique, se instala una guía de acero superior a la vista, en negro mate o inox, sin ninguna obra de albañilería. Es la opción más rápida y la que elegimos cuando el plazo de reforma ya está muy avanzado.",
      "La guía oculta es un punto intermedio: el herraje se aloja en un cajeado superior que se lacamos a juego con la puerta, así que desde el salón solo se ve la hoja deslizar, sin renunciar a la limpieza visual de la empotrada ni exigir tocar el tabique.",
      "El riel invisible es la solución más exigente técnicamente —ni guía ni cajeado a la vista— y siempre requiere que nuestro técnico compruebe antes el falso techo o el dintel disponible, porque el mecanismo necesita espacio oculto por encima del hueco.",
      "En la práctica, la fase de obra en la que te encuentres suele decidir por ti: obra nueva o reforma integral abre las cuatro opciones; reforma ya avanzada normalmente reduce la decisión a guía vista o, si el falso techo lo permite, guía oculta.",
    ],
  },
  {
    slug: "puertas-ocultas-sin-marco-integrar-con-la-pared",
    categoria: "decoracion-e-inspiracion",
    titulo: "Puertas ocultas sin marco: cuándo tiene sentido que la puerta \"desaparezca\"",
    resumen:
      "Enrasadas con el paramento y lacadas del mismo color que la pared: el recurso favorito de los proyectos que buscan continuidad visual.",
    imagen: ocultas,
    cuerpo: [
      "La puerta oculta sin marco se monta sobre un premarco de aluminio y queda enrasada con el yeso, sin tapajuntas ni zócalo interrumpido. El resultado, bien ejecutado, es que la puerta se lee como parte del muro: no compite visualmente con el resto de la estancia.",
      "Funciona especialmente bien en dos escenarios de vivienda en Madrid que vemos con frecuencia: pasillos estrechos donde cualquier marco o tapajuntas recorta visualmente el espacio, y despachos o vestidores integrados en un dormitorio, donde el objetivo es que el acceso pase desapercibido.",
      "Se fabrica en dos versiones según el sentido de apertura: hacia el interior de la estancia, o hacia el pasillo con una bisagra oculta regulable en tres ejes, que permite ajustar la junta perfecta una vez asentada la vivienda —algo especialmente relevante en obra nueva, donde los tabiques todavía se mueven ligeramente los primeros meses.",
      "Para techos altos de piso señorial fabricamos también la versión de doble altura, con refuerzo interior adicional en la hoja para evitar alabeos en formatos que superan los 250 cm.",
      "Un matiz importante de expectativas: al lacarse del mismo color que el paramento —o en un RAL a medida—, cualquier diferencia de tono entre la pintura de la pared y la laca de la puerta se nota más que en una puerta de color contrastado. Por eso, en este modelo en concreto, recomendamos siempre partir de una muestra física antes de fabricar la serie completa.",
    ],
  },
];

export const getCategoriaBlog = (slug: string) => categoriasBlog.find((c) => c.slug === slug);

export const getArticulosDeCategoria = (slug: string) => articulos.filter((a) => a.categoria === slug);

export const getArticulo = (catSlug: string, artSlug: string) => {
  const categoria = getCategoriaBlog(catSlug);
  if (!categoria) return undefined;
  const articulo = articulos.find((a) => a.slug === artSlug && a.categoria === catSlug);
  return articulo ? { categoria, articulo } : undefined;
};

export const detalleImg = detalle;
export const abatiblesImg = abatibles;
