import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import translation files
import translationEl from './locales/el/translation.json'
import translationEn from './locales/en/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: false,
    lng: 'en',
    // interpolation: {
    //   escapeValue: false, // not needed for react!!
    // },
    resources: {
        el: {
            translations: translationEl,
        },
        en: {
            translations: translationEn,
        }
      },
    ns: ["translations"],
    defaultNS: "translations",
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });


export default i18n;