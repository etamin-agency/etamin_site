import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import mack from '../../assets/img/mack.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Search from '../../assets/img/solution/Search.png'
import Branding from '../../assets/img/solution/Branding.png'
import Cloud from '../../assets/img/solution/Search.png'
import Content from '../../assets/img/solution/Content.png'
import Data from '../../assets/img/solution/Data.png'
import Design from '../../assets/img/solution/Design.png'
import Digital from '../../assets/img/solution/Digital.png'
import Email from '../../assets/img/solution/Email.png'
import Media from '../../assets/img/solution/Media.png'

import './SolutionPage.scss';

const Solution = () => {
    // var settings = {
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000, 
    //     arrows: false,
        
    // };

    return (
        <div className="SolutionPage">
           <div className='Solution-text'>
                <h1>How we can help you ?</h1>
                <h2>
                Using powerful, industry-specific software solutions, our team can help you achieve your business goals. 
                </h2>
           </div>
          
           <div className='Solution-item'>
                <div className='Solution-items'>
                    <img src={Search} alt=''/>
                    <p>SEO and Search Engine Optimization</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Media} alt=''/>
                    <p>Content Creation and Marketing</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Data} alt=''/>
                    <p>Social Media Management</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Design} alt=''/>
                    <p>Data Analytics and Business Intelligence</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Digital} alt=''/>
                    <p>Digital Advertising and PPC Management</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Content} alt=''/>
                    <p>Email Marketing Campaigns</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Email} alt=''/>
                    <p>Branding and Graphic Design</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Media} alt=''/>
                    <p>UX/UI Design</p>
                    
                </div>
                <div className='Solution-items'>
                    <img src={Branding} alt=''/>
                    <p>Cloud Solutions and Storage</p>
                    
                </div>
           </div>
           
           
          
        </div>
    );
};

export default Solution;
