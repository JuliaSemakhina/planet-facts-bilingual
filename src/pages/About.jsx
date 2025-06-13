import React from 'react';
import { useTranslation } from "react-i18next";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import voyager from '../images/voyager.png';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const { i18n, t } = useTranslation();
  console.log('🚀 Houston, we have no problems!');


  return (
    <div className='container'>
      <div className='about-section'>
        <h1>{t("about")}</h1>
        <p>{t("text-about")}</p>
        <div>
          <BsFillChatSquareQuoteFill />
          <p>{t("text-about2")}</p>
        </div>
        <p>{t("text-about3")}</p>
        <div className='voyager-section'>
          <img className='voyager' src={voyager} />
        </div>
      </div>
    </div>
  );
};

export default About;
