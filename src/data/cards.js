import imageAtencion from "../assets/images/atencion.jpg";
import imageCamion from "../assets/images/camion.jpg";
import imageCharla from "../assets/images/charla.jpg";
import imageMexico from "../assets/images/mexico.jpg";
import imageMision from "../assets/icons/Mision_nueva.png";
import imageVision from "../assets/icons/Vision_nueva.png";
import imageValores from "../assets/icons/Valores_nueva.png";
import logoWhatsApp from "../assets/icons/logo-whatsapp.svg";
import logoPhone from "../assets/icons/logo-phone.jpg";
import logoEmail from "../assets/icons/logo-email.jpg";
import imagepolitica from "../assets/icons/Politica_calidad_nueva.png"

export const cards = [
  {
    id: 1,
    image: imageCharla,
    title: "Comunicación",
    description:
      "Estamos comprometidos a brindarte un servicio de atención al cliente ágil, donde tus consultas y necesidades son abordadas con prontitud para asegurar tu completa satisfacción.",
  },
  {
    id: 2,
    image: imageCamion,
    title: "Envios",
    description: "Puedes confiar en un servicio de envíos rápido y confiable sin mínimo de compra. Desde el momento en que realizas tu pedido hasta la entrega en tu puerta.",
  },
  {
    id: 3,
    image: imageMexico,
    title: "Cobertura",
    description:
      "Con cobertura de envíos en toda la República Mexicana, llevamos nuestros productos de alta calidad directamente a tu ubicación sin mínimo de compra.",
  },
  {
    id: 4,
    image: imageAtencion,
    title: "Atención",
    description:
      "Valoramos a cada cliente como único. Nuestra atención personalizada va más allá de la venta; nos esforzamos por entender tus necesidades individuales.",
  },
];

export const strategy = [
  {
    id: 1,
    title: "Misión",
    image: imageMision,
    description:
      "Buscamos ofrecer los mejores servicios integrales ofreciendo productos de la mejor calidad, a buen precio dando respuestas rápidas y eficaces para ayudar a nuestrosclientes con sus objetivos de atención a la salud.",
  },
  {
    id: 2,
    title: "Visión",
    image: imageVision,
    description:
      "Ser líderes regionales y nacionales de servicios integrales e insumos médicos, sirviendo mejor a nuestros clientes para preservar la salud.",
  },
  {
    id: 3,
    title: "Valores",
    image: imageValores,
    description: "Honestidad, Excelencia, Compromiso, Pasión, Integridad.",
  },
  {
    id: 4,
    title: "Politica de Calidad",
    image: imagepolitica,
    description: "En Oltech S.A. de C.V., ofrecemos los mejores servicios integrales en materia de: suministro de Insumos de Osteosíntesis y Reemplazo Articular, para impulsar a nuestros clientes en el cumplimiento de sus objetivos en materia de atención a la salud. Asumimos nuestro compromiso desde un enfoque de mejora continua y un apego a la conformidad de los requisitos de carácter legal, reglamentarios y aquellos que por naturaleza de nuestra organización resulten aplicables.",
  },
];

export const contact = [
  {
    id: 1,
    title: "Whatsapp",
    description: "5635350427",
    // link: "https://wa.me/5635350427",
    link: "https://wa.link/xw2myn",
    icon: logoWhatsApp,
  },
  {
    id: 2,
    title: "Correo electrónico",
    description: "info@oltech.mx",
    link: "mailto:info@oltech.mx",
    icon: logoEmail,
  },
  {
    id: 3,
    title: "Teléfono",
    description: "(+52) 5552053632",
    link: "tel:5552053632",
    icon: logoPhone,
  },
];
