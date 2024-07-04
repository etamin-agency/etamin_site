import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './MenuView.scss';
import logo from '../../assets/img/Logo.png';

const MenuView = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <div className='MenuView'>
            <div className={`link-wrapper ${isScrolled ? 'scrolled' : ''}`}>

                <Link to="home" smooth={true} duration={500}>
                    <div className="logo">

                        <img src={logo} alt="etamin logo"/>Etamin

                    </div>
                </Link>
                <Link to="service" smooth={true} duration={500} className="page__link">Services</Link>
                <Link to="about_page" smooth={true} duration={500} className="page__link">About Us</Link>
                <Link to="testimonial" smooth={true} duration={500} className="page__link">Testimonials</Link>
                <Link to="values" smooth={true} duration={500} className="page__link">Our Values</Link>
                <Link to="partners" smooth={true} duration={500} className="page__link">Partners</Link>
            </div>
        </div>
    );
}

export default MenuView;
