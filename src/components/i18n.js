// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json'; // English translations
import translationFR from './locales/fr/translation.json'; // French translations
import translationEN from './locales/mr/translation.json'; // English translations
import translationEN from './locales/hi/translation.json'; // English translations


// Add more translations for other languages as needed

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
