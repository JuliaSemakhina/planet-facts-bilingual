import { useTranslation } from "react-i18next";
import React from "react";
import earth from "../images/solar_system.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const planetTitle =
    i18n.getDataByLanguage(currentLanguage)?.translation?.title || [];

  //returning length of the title, for reference only
  function planet() {
    console.log(planetTitle.length);
  };

  planet();

  return (
    <div className="container">
      <div className="hero-section">
        <h1 className={`title ${planetTitle.length > 20 ? "bg" : "sm"}`}>
          {t("title")}
        </h1>
        <div className="hero">
          <div className="description">
            <p>{t("intro1")}</p>
            <p>{t("intro2")}</p>
            <Link
              className="hero-btn btn"
              to={Math.random() < 0.2 ? `/planet/mars` : `/planet/earth`}
            >
              {t("button")}
            </Link>
          </div>
          <img src={earth} className="earth-home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
