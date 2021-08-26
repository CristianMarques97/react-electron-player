import i18n from "i18next";
import backend from "i18next-electron-fs-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import AppLocalization from "./app/constants/Localization";
window.api.send("localize", `${AppLocalization.URL}{{lng}}/translation.json`);
window.api.send("localize");
i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
      addPath: "./locales/{{lng}}/translation.json",
      ipcRenderer: window.api.i18nextElectronBackend,
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
