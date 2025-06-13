/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context.jsx';

const PlanetTabs = ({ nameKey }) => {
  const { activeTab, setActiveTab } = useGlobalContext();
  const { t } = useTranslation();
  const hotPlanets = ["mercury", "venus", "mars", "earth"];
  const [showFullText, setShowFullText] = useState(false);

  const tabTranslations = t('tabs', { returnObjects: true }) || {};

  const { name, tabs } = t(`planets.${nameKey}`, { returnObjects: true });

  useEffect(() => {
    setShowFullText(false);
  }, [activeTab, tabs[activeTab]?.content]);

  return (
    <div className="planet-tabs">

      <div className="planet-description">
        <h1 className='planet-header'>{name}</h1>
        <p className='planet-text'>
          {showFullText
            ? t(tabs[activeTab]?.content)
            : `${t(tabs[activeTab]?.content).slice(0, 750)}`
          }
          {t(tabs[activeTab]?.content).length > 750 && (
            <button
              className='read-more'
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? t('hide') : t('showMore')}
            </button>
          )}
        </p>
      </div>
      <div className={`tabs-headers ${hotPlanets.includes(nameKey) ? "red" : "blue"}`}>
        {Object.keys(tabs).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`tab ${activeTab === tabKey ? 'active' : ''}`}
          >
            <span>{tabs[tabKey]?.id}</span>  {tabTranslations[tabKey] || t(`defaultTabs.${tabKey}`)}
          </button>
        ))}

      </div>

      <div className="tabs-image">
        <img
          src={tabs[activeTab]?.image}
          alt={`${name} ${activeTab}`}
          className="planet-image"
          onError={(e) => e.target.src = '../images/default-planet.png'}
        />
      </div>
    </div>
  );
};

// PropTypes
PlanetTabs.propTypes = {
  nameKey: PropTypes.string.isRequired,
  planetData: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    tabs: PropTypes.objectOf(
      PropTypes.shape({
        image: PropTypes.string,
        content: PropTypes.string
      })
    ).isRequired
  })
};

export default PlanetTabs;