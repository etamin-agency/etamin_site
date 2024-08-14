import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './MenuView.scss';
import Logo from '../../assets/img/Logo.png'

const MenuView = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='MenuView'>
            <div className={`menu-right ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
            <img src={Logo} alt='logo'/>
                <h1>Etamin</h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>  
                <div className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="home" smooth={true} duration={500} className="page__link">Home</Link>
                    <Link to="service" smooth={true} duration={500} className="page__link">Product</Link>
                    <Link to="testimonial" smooth={true} duration={500} className="page__link">Testimonial</Link>
                    <Link to="about_page" smooth={true} duration={500} className="page__link">About</Link>
                    <Link to="values" smooth={true} duration={500} className="page__link">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default MenuView;