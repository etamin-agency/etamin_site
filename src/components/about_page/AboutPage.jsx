import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import mack from '../../assets/img/mack.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Search from '../../assets/img/about/Search.png'
import Branding from '../../assets/img/about/Branding.png'
import Cloud from '../../assets/img/about/Search.png'
import Content from '../../assets/img/about/Content.png'
import Data from '../../assets/img/about/Data.png'
import Design from '../../assets/img/about/Design.png'
import Digital from '../../assets/img/about/Digital.png'
import Email from '../../assets/img/about/Email.png'
import Media from '../../assets/img/about/Media.png'

import './AboutPage.scss';

const AboutPage = () => {
    // var settings = {
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000, 
    //     arrows: false,
        
    // };

    return (
        <div className="AboutPage">
           <div className='About-text'>
                <h1>How we can help you ?</h1>
                <h2>
                Using powerful, industry-specific software solutions, our team can help you achieve your business goals. 
                </h2>
           </div>
          
           <div className='About-item'>
                <div className='About-items'>
                    <img src={Search} alt=''/>
                    <p>SEO and Search Engine Optimization</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Media} alt=''/>
                    <p>Content Creation and Marketing</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Data} alt=''/>
                    <p>Social Media Management</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Design} alt=''/>
                    <p>Data Analytics and Business Intelligence</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Digital} alt=''/>
                    <p>Digital Advertising and PPC Management</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Content} alt=''/>
                    <p>Email Marketing Campaigns</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Email} alt=''/>
                    <p>Branding and Graphic Design</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Media} alt=''/>
                    <p>UX/UI Design</p>
                    
                </div>
                <div className='About-items'>
                    <img src={Branding} alt=''/>
                    <p>Cloud Solutions and Storage</p>
                    
                </div>
           </div>
           
           
          
        </div>
    );
};

export default AboutPage;
