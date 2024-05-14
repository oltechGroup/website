import imageAtencion from "../assets/images/atencion.jpg";
import imageCamion from "../assets/images/camion.jpg";
import imageCharla from "../assets/images/charla.jpg";
import imageMexico from "../assets/images/mexico.jpg";
import imageMision from "../assets/icons/mision.jpg";
import imageVision from "../assets/icons/vision.jpg";
import imageValores from "../assets/icons/balanza.jpg";
import logoWhatsApp from "../assets/icons/logo-whatsapp.svg";
import logoPhone from "../assets/icons/logo-phone.jpg";
import logoEmail from "../assets/icons/logo-email.jpg";

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
      "Ofrecer servicios integrales e insumos médicos de alta calidad a precios accesibles, y brindar respuestas rápidas y eficaces para ayudar a nuestros clientes a cumplir con sus objetivos de atención médica.",
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
    description: "Honestidad, Excelencia, Compromiso, Pasión, Integridad",
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
