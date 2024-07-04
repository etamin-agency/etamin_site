import after_work from '../../assets/img/Artwork.png'

import './AboutPage.scss'

const AboutPage = () => {

    return (
        <div className="AboutPage">
            <div className="about-wrapper">
                <div className="about-block">
                    <img src={after_work} alt=" after work image"/>
                </div>
                <div className="about-block">
                    <div className="about-text">
                        Every big company needs to thank not only itself, but also those who have stood beside it and believed in it. After all, the most important principle in our work is trust. <br/>
                        Trust not only ensures the loyalty of customers and partners, but also increases our demand for ourselves. We cooperate on the basis of relations built on thousand-year human traditions.
                    </div>
                    <div className="info-container">
                        <div className="info-block">
                            <div className="info-num">25+</div>
                            <div className="info-line"></div>
                            <div className="info-text">Employee</div>
                        </div>
                        <div className="info-block">
                            <div className="info-num">90+</div>
                            <div className="info-line"></div>
                            <div className="info-text">Project</div>
                        </div>
                        <div className="info-block">
                            <div className="info-num">40+</div>
                            <div className="info-line"></div>
                            <div className="info-text">Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;