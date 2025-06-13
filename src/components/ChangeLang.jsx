import { useTranslation } from "react-i18next";
import React from 'react';
import { LANGUAGES } from "../constants";

const ChangeLang = () => {

  // eslint-disable-next-line no-unused-vars
  const { i18n, t } = useTranslation();

  const onChangeLang = async (e) => {
    const lang_code = e.target.value;

    if (lang_code) {
      try {
        await i18n.changeLanguage(lang_code);
        console.log('Язык успешно изменен на:', lang_code);
      } catch (error) {
        console.error('Ошибка при смене языка:', error);
      }
    } else {
      console.warn('Выбран пустой язык');
    }
  };

  return (
    <div className="languages">
      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLang;