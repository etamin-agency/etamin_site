// FooterPage.js
import React from 'react';
import mapImg from "../../assets/img/contact/map.png";
import massageImg from "../../assets/img/contact/massage.png";
import androidImg from "../../assets/img/contact/android.png";
import socialImg from "../../assets/img/contact/social.png";
import './FooterPage.scss';
import MyGoogleMap from '../myyendex'; // Update the import

const FooterPage = () => {
  return (
    <div className="FooterPage">
      <div className='footer-pages'>
        <h2>Pages</h2>
        <p>Eleanor Edwards</p>
        <p>Ted Robertson</p>
        <p>Annette Russell</p>
        <p>Jennie Mckinney</p>
        <p>Gloria Richards</p>
      </div>
      
      <MyGoogleMap />

      <div className='contact-address'>
        <div className='contact-items'>
          <img src={mapImg} alt="map icon" />
          <p>6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
        </div>
        <div className='contact-items'>
          <img src={androidImg} alt="android icon" />
          <p>(843) 555-0130</p>
        </div>
        <div className='contact-items'>
          <img src={massageImg} alt="massage icon" />
          <p>willie.jennings@example.com</p>
        </div>
        <img src={socialImg} className="contact-social" alt="social icon" />
      </div>
    </div>
  );
};

export default FooterPage;
