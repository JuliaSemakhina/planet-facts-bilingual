import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PlanetList = ({ onPlanetClick }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();

  const planetsList = i18n.getDataByLanguage(currentLanguage)?.translation?.planetsList || [];


  return (
    <ul className='planet-list'>
      {planetsList.map((planet) => (
        <li key={planet.id}>
          <Link
            onClick={onPlanetClick}
            className={location.pathname === `/planet/${planet.nameKey}` ? ' link active' : 'link'}
            to={`/planet/${planet.nameKey}`}>
            {t(`planets.${planet.nameKey}.displayName`)}
          </Link>
        </li>

      ))}
    </ul>
  );
};

export default PlanetList;