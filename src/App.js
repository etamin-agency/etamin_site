import MainPage from "./components/main_page/MainPage";

import MenuView from "./components/menu_bar/MenuView";

import ServicePage from "./components/service_page/ServicePage";
import AboutPage from "./components/about_page/AboutPage";
import TestimonialsPage from "./components/testimonials_page/TestimonialsPage";

import OurValuesPage from "./components/our_values_page/OurValuesPage";
import PartnersPage from "./components/partners_page/PartnersPage";

import {Element} from 'react-scroll';

import './App.scss';
import FooterPage from "./components/footer_page/FooterPage";

function App() {
    return (
        <div className="App">
            <MenuView/>
            <div className="container">
                <Element name="home">
                    <MainPage/>
                </Element>
                <Element name="service">
                    <ServicePage/>
                </Element>
                <Element name="about_page">
                    <AboutPage/>
                </Element>
                <Element name="testimonial">
                    <TestimonialsPage/>
                </Element>

                <Element name="values">
                    <OurValuesPage/>
                </Element>
                <Element name="partners">
                    <PartnersPage/>
                </Element>
            </div>
            <FooterPage/>
        </div>
    );
}

export default App;
