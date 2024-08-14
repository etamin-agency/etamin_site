import MainPage from "./components/main_page/MainPage";

import MenuView from "./components/menu_bar/MenuView";

import ServicePage from "./components/product_page/Product";
import AboutPage from "./components/about_page/AboutPage";
import TestimonialsPage from "./components/testimonials_page/TestimonialsPage";

import OurValuesPage from "./components/contac_page/contact";
import SolutionPage from "./components/solution-page/Solutionpage";
import LanguageSwitcher from "./components/languages/languageSwitcher"
import {Element} from 'react-scroll';

import './App.scss';
import FooterPage from "./components/footer_page/FooterPage";

function App() {
    return (
        <div className="App">
           
            <div className="container">
                <Element name="home">
                    <MainPage/>
                </Element>
                <Element name="service">
                    <ServicePage/>
                </Element>
                <Element name="solution">
                    <SolutionPage/>
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
               
            </div>
            <FooterPage/>
            <LanguageSwitcher/>
        </div>
    );
}

export default App;
