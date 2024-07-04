import it_park_image from '../../assets/img/it_park.png'
import amazon_image from '../../assets/img/amazon.png'
import yandex_image from '../../assets/img/yandex.png'
import digit_all_image from '../../assets/img/digit_all_white.png'
import microsoft_image from '../../assets/img/microsoft.png'

import './PartnersPage.scss'
import send from "../../assets/img/send.png";
const PartnersPage = () => {

    return(
        <div className="PartnersPage">
            <div className="partners-title">
                Our Partners
            </div>
            <div className="partners-wrapper">
                    <img src={it_park_image} alt="some image"/>
                    <img src={amazon_image} alt="some image"/>
                    <img src={yandex_image} alt="some image"/>
                    <img src={digit_all_image} alt="some image"/>
                    <img src={microsoft_image} alt="some image"/>
            </div>
            <div className="partners-write-block">
                <div className="write-block-item">
                    <div className="write-item-title">
                        Ready to get started ?
                    </div>
                    <div className="write-item-subtitle">
                        Turn your dreams into reality
                    </div>
                </div>
                <div className="write-block-item">
                    <div className="main-button">
                        <div>WRITE TO US</div>
                        <img src={send} alt="send icon"/>
                    </div>
                </div>
            </div>
        </div>)
}
export default PartnersPage;