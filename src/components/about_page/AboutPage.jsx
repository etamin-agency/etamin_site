import './AboutPage.scss'

import Squid_img from "../../assets/img/oktopus.png"

const Solution = () => {

    return(
        <div className="AboutPage">
            <div className='About-text'>
                <h1>ABOUT US</h1>
                <p>We build robust digital solutions across industries with a highly creative and<br/>
                dedicated team of professionals.</p>
            </div>
            <div className='About-wrapper'>
                <div className='About-wrapper-text'>
                <h1>ETAMIN IT SOLUTIONS</h1>
                    <p>
                    Etamin IT Solutions is a leading IT company dedicated to delivering innovative technology solutions. Since our founding, we have been focused on addressing our clients' technological needs and enhancing business processes with top-quality services.</p>
                    <p>Our mission is to provide effective and reliable solutions by leveraging the latest industry technologies and trends. Our team of experienced professionals is committed to a personalized approach to every project, ensuring the highest standards of service and excellence.</p>
                    <p>At Etamin IT Solutions, we prioritize understanding your unique needs and delivering exceptional results. We invite you to learn more about us and look forward to collaborating with you to drive your business forward.</p>
                </div>
                <img src={Squid_img} alt='Squid'/>
            </div>
        </div>
        
    );
}
export default Solution;