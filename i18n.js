import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esTranslation from './locals/es.json';
import enTranslation from './locals/en.json';


// Traducciones en diferentes idiomas
const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React ya escapa valores de forma segura
    }
  });

export default i18n;
