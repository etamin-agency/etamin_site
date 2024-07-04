import rectangle from '../../assets/img/Rectangle.png'
import service_image from "../../assets/img/service.svg";
import boy_image from "../../assets/img/boy.png";
import star_image from "../../assets/img/star.png";
import shit_image from "../../assets/img/shit.jpeg";
import karen_image from "../../assets/img/karen.jpeg";

import './TestimonialsPage.scss'

const TestimonialsPage = () => {
    return (
        <div className="TestimonialsPage">
            <div className="overlay"></div>
            <div className="square-wrapper">
                <div className="blue-square"></div>
                <img className="black-square" src={rectangle} alt="rectangle"></img>
            </div>
            <img src={service_image} alt="service image" className="service-image"/>
            <div className="testimonials-wrapper">
                <div className="testimonials-title">
                    Client Testimonials
                </div>
                <div className="testimonials-items-wrapper">
                    <div className="item-block">
                        <div className="item-block-wrapper">
                            <div className="item-block-text">Our new website is fantastic. The team perfectly captured our brand's essence and created an intuitive, user-friendly experience. We've seen a significant increase in user engagement.
                            </div>
                            <div className="stars">
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                            </div>
                        </div>
                        <div className="client-item-block">
                            <img src={boy_image} alt="some alt" className="client-image"/>
                            <div className="client-data">
                                <div className="client-name">
                                    Sardor Jabbarov
                                </div>
                                <div className="client-position">
                                    Executive Director
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-block">
                        <div className="item-block-wrapper">
                            <div className="item-block-text">The custom CRM solution they developed for us has streamlined our operations and improved our customer relations. The team's support and responsiveness were exceptional throughout the project.
                            </div>
                            <div className="stars">
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                            </div>
                        </div>
                        <div className="client-item-block">
                            <img src={shit_image} alt="some alt" className="client-image"/>
                            <div className="client-data">
                                <div className="client-name">
                                    Sherzod Abdurakhmonov
                                </div>
                                <div className="client-position">
                                    Head of IT Park Uzbekistan
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-block">
                        <div className="item-block-wrapper">
                            <div className="item-block-text">Their expertise in mobile app development helped us launch a robust, user-friendly app. Our customers love the new features and the seamless performance. Highly recommend their services!
                            </div>
                            <div className="stars">
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                                <img src={star_image} alt="star"/>
                            </div>
                        </div>
                        <div className="client-item-block">
                            <img src={karen_image} alt="some alt" className="client-image"/>
                            <div className="client-data">
                                <div className="client-name">
                                    Emily Wilson
                                </div>
                                <div className="client-position">
                                    Product Owner
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialsPage;
