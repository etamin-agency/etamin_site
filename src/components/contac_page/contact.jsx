import map from "../../assets/img/contact/map.png";
import massage from "../../assets/img/contact/massage.png"
import android from "../../assets/img/contact/android.png"
import social from "../../assets/img/contact/social.png"

import './contact.scss'

const contact = () => {

    return (
        <div className="contact">
           <div className='contact-title'>
                <h1>Contact Us</h1>
                <p>Most calendars are designed for teams. 
                Slate is designed for freelancers</p>    
           </div>
           <div className='contact-group'>
                <div className='contact-us'>
                    <p>Contact Us</p>
                    <input type='text' placeholder='Your Name'/>
                    <input type='text' placeholder='Your Email'/>
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button>Send</button>
                </div>
                <div className='contact-address'>
                    <div className='contact-items'>
                        <img src={map} alt="logo"/>
                        <p>6386 Spring St undefined Anchorage, 
                        Georgia 12473 United States</p>
                    </div>
                    <div className='contact-items'>
                        <img src={android} alt="logo"/>
                        <p>(843) 555-0130</p>
                    </div>
                    <div className='contact-items'>
                        <img src={massage} alt="logo"/>
                        <p>willie.jennings@example.com</p>
                    </div>
                    <img src={social} className="contact-social" alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default contact;
