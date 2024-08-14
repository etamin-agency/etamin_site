import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector
import Backend from 'i18next-http-backend'; // Optional, for loading translations from a server
import translationEN from './locales/en.json';
import translationRU from './locales/ru.json';
import translationUZ from './locales/uz.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n
  .use(Backend) // Optional: load translations using http (default public/assets/locals)
  .use(
    
  ) // Use the language detector
  .use(initReactI18next) // Bind i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language if the detected language is not available
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Where the language should be cached
    },
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });
  i18n.on('languageChanged', (lng) => {
    console.log('Language changed to:', lng);
  });
  

export default i18n;
