import values_image from '../../assets/img/values_image.png'
import check_icon from '../../assets/img/check_icon.png'
import location_icon from '../../assets/img/location_icon.png'
import speed_time_icon from '../../assets/img/speed_time_icon.png'
import light_icon from '../../assets/img/light_icon.png'


import './OurValuesPage.scss'

const OurValuesPage = () => {

    return (
        <div className="OurValuesPage">
            <div className="our-values-wrapper">
                <div className="values-block">
                    <img src={values_image} alt="values-image"/>
                </div>
                <div className="values-block">
                    <div className="values-title">
                        ETAMIN IT SOLUTION
                    </div>
                    <div className="values-subtitle">
                        WHERE IMAGINATION MEETS INNOVATION
                    </div>

                    <div className="values-item-wrapper">
                        <div className="values-item-block">
                            <div className="values-check-icon values-icon"><img src={check_icon} alt="perfect work check icon"/>
                            </div>
                            <div className="values-item-title">Perfect work</div>
                            <div className="values-item-subtitle">Each believed work will perfectly performed than
                                expected.
                            </div>
                        </div>
                        <div className="values-item-block">
                            <div className="values-location-icon values-icon"><img src={location_icon} alt="any location"/></div>
                            <div className="values-item-title">Any Location</div>
                            <div className="values-item-subtitle">Any moment from any location</div>
                        </div>
                        <div className="values-item-block">
                            <div className="values-speed-icon values-icon"><img src={speed_time_icon} alt="always on time icon"/>
                            </div>
                            <div className="values-item-title">Always on time!</div>
                            <div className="values-item-subtitle">Submitting projects on time.</div>
                        </div>
                        <div className="values-item-block">
                            <div className="values-light-icon values-icon"><img src={light_icon} alt="light ideas icon"/></div>
                            <div className="values-item-title">Creative ideas</div>
                            <div className="values-item-subtitle">We solve any problem with creativity.</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OurValuesPage;
