import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import AppLocalization from './app/constants/Localization'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "pt-BR",
      backend: {
        loadPath: `${AppLocalization.URL}{{lng}}/translation.json`,
      },
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    }
  );
export default i18n;
