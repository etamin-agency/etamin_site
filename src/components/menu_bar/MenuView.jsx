import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './MenuView.scss';
import logo from "../../assets/img/icon.png"

const MenuView = () => {
    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 30) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className='MenuView'>
           
                <div className='menu-right'>
                <img src={logo} alt='logo'/>
                    <Link to="home"  smooth={true} duration={500} className="page__link">Home</Link>
                    <Link to="service" smooth={true} duration={500} className="page__link">Product</Link>
                    <Link to="about_page" smooth={true} duration={500} className="page__link">Pricing</Link>
                    <Link to="testimonial" smooth={true} duration={500} className="page__link">About</Link>
                    <Link to="values" smooth={true} duration={500} className="page__link">Contact</Link>
                    <div className='right-group'>
                        <input type='text'  placeholder='Your Email'/>
                        <button className='menu-button'>Contact Us</button>
                    </div>
                </div>
                
           
        </div>
    );
}

export default MenuView;
