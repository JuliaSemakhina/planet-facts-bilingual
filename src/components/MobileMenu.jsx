/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from '../context.jsx';
import { useClickAway } from "use-click-away";
import PlanetList from '../components/PlanetList';
import logo from '../images/planet-icon.svg';


const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const { i18n, t } = useTranslation();

  const ref = useRef("");

  useClickAway(ref, () => setIsMenuOpen(false));
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <aside className={`menu ${isMenuOpen ? 'show' : ""}`}>
      <div className='sidebar'>
        <div className='sidebar-links'>
          <ul>
            <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              {t("home")}
            </NavLink>
            <PlanetList onPlanetClick={closeMenu} />
            <NavLink to="/about" className={({ isActive }) => `link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              {t("about")}
            </NavLink>
          </ul>
        </div>
        <img className='logo' src={logo} alt="planet-logo" />
      </div>
    </aside>
  );
};

export default MobileMenu;