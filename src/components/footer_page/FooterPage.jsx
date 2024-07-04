import etamin_logo from '../../assets/img/Logo.png'

import instagram_logo from '../../assets/img/instagram.png'
import facebook_logo from '../../assets/img/facebook.png'
import linkedin_logo from '../../assets/img/linkedin.png'
import twitter_logo from '../../assets/img/twitter.png'

import './FooterPage.scss'

const FooterPage = () => {

    return (
        <div className="FooterPage">
            <div className="footer-logo">
                <img src={etamin_logo} alt="etamin_logo"/>
            </div>
            <div className="footer-link-wrapper">
                <a href="https://x.com/etamin_agency">
                    <img src={twitter_logo} alt="some image"/>
                </a>
                <a href="https://www.instagram.com/etamin_agency">
                    <img src={instagram_logo} alt="some image"/>
                </a>
                <a href="https://www.linkedin.com/company/etamin.agency">
                    <img src={linkedin_logo} alt="some image"/>
                </a>
                <a href="https://www.facebook.com/etamin.org">
                    <img src={facebook_logo} alt="some image"/>
                </a>
            </div>
            <div className="footer-text">
                Copyright © 2024
                <br/>
                ETAMIN
            </div>
        </div>
    )
}

export default FooterPage;