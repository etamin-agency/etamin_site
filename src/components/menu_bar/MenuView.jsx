import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './MenuView.scss';
import Logo from '../../assets/img/Logo.png';

const MenuView = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

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

    // const handleLanguageChange = (event) => {
    //     const newLang = event.target.value;
    //     i18n.changeLanguage(newLang);
    //     setSelectedLanguage(newLang);
    // };

    return (
        <div className='MenuView'>
            <div className={`menu-right ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    <h1>{t('brand')}</h1>
                </div>
                
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>  
                <div className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="home" smooth={true} duration={500} className="page__link">{t('home')}</Link>
                    <Link to="service" smooth={true} duration={500} className="page__link">{t('services')}</Link>
                    <Link to="testimonial" smooth={true} duration={500} className="page__link">{t('testimonial')}</Link>
                    <Link to="about_page" smooth={true} duration={500} className="page__link">{t('about')}</Link>
                    <Link to="values" smooth={true} duration={500} className="page__link">{t('contact')}</Link>
                </div>
                {/* <div className="language-selector">
                    <select value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                </div> */}
            </div>
        </div>
    );
}

export default MenuView;
