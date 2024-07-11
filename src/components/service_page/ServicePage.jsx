import { Helmet } from 'react-helmet-async';
import feature_icon from '../../assets/img/feature.png';
import application_icon from '../../assets/img/application.png';
import online_icon from '../../assets/img/online-order.png';
import startup_icon from '../../assets/img/startup.png';
import delivery_icon from '../../assets/img/delivery.png';
import software_icon from '../../assets/img/software-as-service.png';
import virtual from '../../assets/img/virtual.png';
import "./ServicePage.scss";
import { useState } from "react";
import ServiceBlock from "./ServiceBlock";

const ServicePage = () => {
    const [block, setBlock] = useState();

    return (
        <div className="ServicePage">
            <Helmet>
                <title>Our Services | Etamin</title>
                <meta name="description" content="Explore Etamin's range of services including AR/VR solutions, web and mobile applications, software services, robotics, and automation." />
                <meta name="keywords" content="Etamin, AR/VR, web applications, mobile applications, software services, robotics, automation, tech solutions, Uzbekistan, Tashkent" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Our Services | Etamin" />
                <meta property="og:description" content="Explore Etamin's range of services including AR/VR solutions, web and mobile applications, software services, robotics, and automation." />
                <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
                <meta property="og:url" content="https://www.etamin.agency/services" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | Etamin" />
                <meta name="twitter:description" content="Explore Etamin's range of services including AR/VR solutions, web and mobile applications, software services, robotics, and automation." />
                <meta name="twitter:image" content="%PUBLIC_URL%/twitter-image.png" />
            </Helmet>

            <div className="service-title">
                Our Services
            </div>
            <div className="service-wrapper">
                {block ?
                    block === 'virtual' ?
                        <div className='virtual'>
                            <div className='virtual-text'>
                                <h1>AR/VR</h1>
                                <p>
                                    Augmented & Virtual Reality Solutions: Engage your audience with immersive AR and VR experiences tailored for your business needs.
                                </p>
                            </div>
                            <img src={virtual} alt="values-image"/>
                        </div>
                        :
                        <ServiceBlock block={block} />
                    :
                    (
                        <>
                            <div className="service-block" onClick={() => setBlock('site')}>
                                <div className="block-img"><img src={startup_icon} alt="block icon"/></div>
                                <div className="block-text">Modern Web Sites</div>
                            </div>
                            <div className="service-block" onClick={() => setBlock('virtual')}>
                                <div className="block-img"><img src={application_icon} alt="block icon"/></div>
                                <div className="block-text">Web Applications</div>
                            </div>
                            <div className="service-block">
                                <div className="block-img"><img src={online_icon} alt="block icon"/></div>
                                <div className="block-text">Mobile Applications</div>
                            </div>
                            <div className="service-block">
                                <div className="block-img"><img src={feature_icon} alt="block icon"/></div>
                                <div className="block-text">Software Services</div>
                            </div>
                            <div className="service-block">
                                <div className="block-img"><img src={delivery_icon} alt="block icon"/></div>
                                <div className="block-text">Robotics</div>
                            </div>
                            <div className="service-block">
                                <div className="block-img"><img src={software_icon} alt="block icon"/></div>
                                <div className="block-text">Automations</div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default ServicePage;
