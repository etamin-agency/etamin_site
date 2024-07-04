import site_img from '../../assets/img/service/site.png'
import space_img from '../../assets/img/service/space.png'
import tv_img from '../../assets/img/service/tv.png'

import './ServicePage.scss'

const data = {
    site: {
        img: site_img
    }
}
const ServiceBlock = () => {

    return (
        <div className="ServiceBlock">
            <img className="service-item-image" src={site_img} alt="some image"/>
            <div className="wrapper">
                <div className="item-text">

                </div>
                <img className="item-image" src={tv_img} alt=""/>
            </div>
            <img className="service-item-image" src={space_img} alt=""/>
        </div>
    )
}
export default ServiceBlock;