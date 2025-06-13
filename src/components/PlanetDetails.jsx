import React, { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import PlanetTabs from "./PlanetTabs";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from '../context.jsx';

function PlanetDetails() {

  const { t } = useTranslation();
  const { nameKey } = useParams();
  const { setActiveTab } = useGlobalContext();

  const planetData = t(`planets.${nameKey}`, { returnObjects: true });

  const DEFAULT_TAB = "overview";

  const resetTab = useCallback(() => {
    setActiveTab(DEFAULT_TAB);
  }, [setActiveTab]);

  useEffect(() => {
    resetTab();
  }, [nameKey, resetTab]);

  if (!planetData) {
    return <div>{t('errors.planetNotFound')}</div>;
  }

  return (
    <div className="container">
      <div className="planet-details">
        <PlanetTabs nameKey={nameKey} />
      </div>

      <div className='planet-info'>
        <ul className='data-items'>
          <li>
            <p className='p-title'>{t('radius')}: </p>
            <p className='numbers'>{planetData.radius}</p>
          </li>
          <li>
            <p className='p-title'>{t('temperature')}: </p>
            <p className='numbers'>{planetData.temperature}</p>
          </li>
          <li>
            <p className='p-title'>{t('rotation')}: </p>
            <p className='numbers'>{planetData.rotation}</p>
          </li>
          <li>
            <p className='p-title'>{t('revolution')}: </p>
            <p className='numbers'>{planetData.revolution}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanetDetails;