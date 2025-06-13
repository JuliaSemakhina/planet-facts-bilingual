import enTranslations from "./locales/en_transl.json";
import rusTranslations from "./locales/rus_transl.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
.use(initReactI18next)
.init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    resources: {
      en: {
        translation: enTranslations,
      },
      rus: {
        translation: rusTranslations,
      },
    },
});
  
export default i18n;