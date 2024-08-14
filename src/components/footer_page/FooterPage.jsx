// FooterPage.js
import React from 'react';
import mapImg from "../../assets/img/contact/map.png";
import massageImg from "../../assets/img/contact/massage.png";
import androidImg from "../../assets/img/contact/android.png";
import socialImg from "../../assets/img/contact/social.png";
import twitter_logo from "../../assets/img/contact/twitter_logo.png";
import instagram_logo from "../../assets/img/contact/instagram_logo.png";
import linkedin_logo from "../../assets/img/contact/linkedin_logo.png";
import facebook_logo from "../../assets/img/contact/facebook_logo.png";
import telegram_logo from "../../assets/img/contact/telegram_logo.png";
import './FooterPage.scss';
import { Link } from 'react-scroll';
import MyGoogleMap from '../myyendex'; // Update the import

const FooterPage = () => {
  return (
    <div className="FooterPage">
      <div className='footer-pages'>
        <h2>Pages</h2>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to='service' smooth={true} duration={500}>Services</Link>
        <Link to='testimonial' smooth={true} duration={500}>Testimonial</Link>
        <Link to='about_page' smooth={true} duration={500}>About Us</Link>
       
      </div>
      
      <MyGoogleMap className="yandex"/>

      <div className='contact-address'>
        <div className='contact-items'>
          <img src={mapImg} alt="map icon" />
          <p>4A, Amir Temur Street, Namangan region
          Uzbekistan</p>
        </div>
        <div className='contact-items'>
          <img src={androidImg} alt="android icon" />
          <p>(20) 000 85 88</p>
        </div>
        <div className='contact-items'>
          <img src={massageImg} alt="massage icon" />
          <p>info@etamin.agency</p>
        </div>
        <div className="footer-link-wrapper">
            <a href="https://x.com/etamin_agency">
                <img src={twitter_logo} alt="some image"/>
            </a>
            <a href="https://www.instagram.com/etamin_agency">
                <img src={instagram_logo} alt="some image"/>
            </a>
            <a href="https://www.linkedin.com/company/etamin.agency">
                <img src={linkedin_logo} alt="some image"/>
            </a>
            <a href="https://www.facebook.com/etamin.org">
                <img src={facebook_logo} alt="some image"/>
            </a>
            <a href="https://t.me/etamin_agency">
                <img src={telegram_logo} alt="some image"/>
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default FooterPage;
