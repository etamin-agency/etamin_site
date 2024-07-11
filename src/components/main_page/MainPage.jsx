import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import mask from '../../assets/img/Mask.png';
import rocket from '../../assets/img/rocket_banner.png';
import send from '../../assets/img/send.png';
import TypingEffect from './TypingEffect';

import './MainPage.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

const phrases = [
    "Where Imagination meets Innovation",
    "Where Dreams become Reality",
    "Where Ideas take Flight",
    "Where Creativity knows no Bounds"
];

const MainPage = () => {
    return (
        <div className="MainPage">
            <Helmet>
                <title>Etamin - IT Solutions</title>
                <meta name="description" content="Etamin: Where imagination meets innovation. Discover how we transform ideas into reality with our cutting-edge IT solutions." />
                <meta name="keywords" content="Etamin, IT solutions, innovation, creativity, technology, AR/VR, AI, web applications, mobile applications, Uzbekistan, Tashkent" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Etamin - IT Solutions" />
                <meta property="og:description" content="Etamin: Where imagination meets innovation. Discover how we transform ideas into reality with our cutting-edge IT solutions." />
                <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
                <meta property="og:url" content="https://www.etamin.agency" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Etamin - IT Solutions" />
                <meta name="twitter:description" content="Etamin: Where imagination meets innovation. Discover how we transform ideas into reality with our cutting-edge IT solutions." />
                <meta name="twitter:image" content="%PUBLIC_URL%/twitter-image.png" />
            </Helmet>

            <motion.div
                whileInView={{ x: [-200, 0], y: [0, -100], opacity: [0, 1] }}
                transition={{ duration: 0.3 }}
                className="app__header-info"
            >
                <div className="main-rectangle" />
            </motion.div>
            <img src={mask} alt="mask background item" className="main-mask" />

            <div className="main-wrapper">
                <div className="main-item">
                    <h1>Etamin - IT Solutions</h1>
                    <div className="main-subtitle">
                        <TypingEffect
                            texts={phrases}
                            typingSpeed={150}
                            deletingSpeed={75}
                            pauseTime={2000}
                        />
                    </div>
                    <div className="main-button">
                        <div>WRITE TO US</div>
                        <img src={send} alt="send icon" />
                    </div>
                </div>
                <div className="main-item">
                    <motion.div
                        variant={scaleVariants}
                        whileInView={scaleVariants.whileInView}
                        className="app__header-circles"
                    >
                        <img src={rocket} alt="rocket image" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
