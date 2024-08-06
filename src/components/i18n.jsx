import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // load translations using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // use en if detected lng is not available
    debug: true, // enable debug output to console
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // path to load translations
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
