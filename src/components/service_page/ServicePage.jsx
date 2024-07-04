import feature_icon from '../../assets/img/feature.png'
import application_icon from '../../assets/img/application.png'
import online_icon from '../../assets/img/online-order.png'
import startup_icon from '../../assets/img/startup.png'
import delivery_icon from '../../assets/img/delivery.png'
import software_icon from '../../assets/img/software-as-service.png'
import "./ServicePage.scss"
import {useState} from "react";
import ServiceBlock from "./ServiceBlock";

const ServicePage = () => {

    const [block, setBlock] = useState();
    return (
        <div className="ServicePage">
            <div className="service-title">
                Our Services
            </div>
            <div className="service-wrapper">
                {/*<ServiceBlock block={block}/>*/}
                {block ?
                    <ServiceBlock block={block}/>
                    :
                    (
                        <>
                            <div className="service-block" onClick={()=>setBlock('site')}>
                                <div className="block-img"><img src={startup_icon} alt="block icon"/></div>
                                <div className="block-text"> Modern Web Sites</div>
                            </div>
                            <div className="service-block">
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
    )

}

export default ServicePage;