import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/planet-icon.svg';
import { useTranslation } from "react-i18next";
import PlanetList from '../components/PlanetList';
import ChangeLang from '../components/ChangeLang';
import { useGlobalContext } from '../context.jsx';
import { Squash as Hamburger } from 'hamburger-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
};

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { i18n, t } = useTranslation();
  const { setIsMenuOpen, isMenuOpen } = useGlobalContext();

  return (
    <nav>
      <div className="nav-links">
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <img className='logo' src={logo} alt="planet-logo" />
        </motion.div>
        <div className="links">
          <div className='planet-links'>
            <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`} end>
              {t("home")}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `link ${isActive ? "active" : ""}`} end>{t("about")}</NavLink>
            <PlanetList />
          </div>
          <ChangeLang />
        </div>

        <button className='burger-btn'>
          <Hamburger label="Show menu" rounded size={26} toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;