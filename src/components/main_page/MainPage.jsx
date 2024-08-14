import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainPage.scss';
import MenuView from '../menu_bar/MenuView';

import objeto1 from "../../assets/img/main/Objeto1.png";
import objeto2 from "../../assets/img/main/Objeto2.png";
import objeto3 from "../../assets/img/main/Objeto3.png";
import objeto4 from "../../assets/img/main/animation1.png";
import objeto5 from "../../assets/img/main/animation2.png";
import objeto6 from "../../assets/img/main/animation3.png";
import rocket from "../../assets/img/main/rocket.png";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className='MainPage'>
      <MenuView />
      
      <div className='Main-text'>
        <div className='main-child'>
          <p>{t('companyName')}</p>
          <h1>{t('sloganPart1')} <h2>{t('sloganPart2')}</h2></h1>
        </div>
      </div>
      <img src={objeto4} className='vectorial1' alt='home-img'/>
      <img src={objeto5} className='vectorial2' alt='home-img'/>
      <img src={objeto6} className='vectorial3' alt='home-img'/>
      <img src={objeto1} className='objeto1' alt='home-img'/>
      <img src={objeto2} className='objeto2' alt='home-img'/>
      <img src={objeto3} className='objeto3' alt='home-img'/>
      <img src={rocket} className='rocket' alt='home-img'/>
    </div>
  );
};

export default MainPage;
