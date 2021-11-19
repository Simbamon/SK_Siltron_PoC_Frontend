import translationEN from "./locales/en/translationEN.json";
import translationKO from "./locales/ko/translationKO.json";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en', 'ko']

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ko',
    debug: true,
    resources,
    whitelist: Languages,
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;