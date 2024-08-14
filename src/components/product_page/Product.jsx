import React from 'react';
import Slider from 'react-slick';
import item1 from '../../assets/img/servic/slide1.png';
import './Product.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/img/servic/slide1.png";
import slide2 from "../../assets/img/servic/slide2.png";
import slide3 from "../../assets/img/servic/slide3.png";
import slide4 from "../../assets/img/servic/slide4.png";
import slide5 from "../../assets/img/servic/slide5.png";
import slide6 from "../../assets/img/servic/slide6.png";
import slide7 from "../../assets/img/servic/slide7.png";
import slide8 from "../../assets/img/servic/slide8.png";
import slide9 from "../../assets/img/servic/slide9.png";
import slide10 from "../../assets/img/servic/slide10.png";
import slide11 from "../../assets/img/servic/slide11.png";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11];


const ProductBlock = () => {
   

    return (
        <div className="ProductBlock">
        
            <div className='Product-title'>
                <h2>At your fingertips</h2>
                <h1>OUR SERVICES</h1>
                
            </div>
            
            
            {/* <div className='Product-items'>
                <div className="product-item Product-item1">
                    <img src={slide1} alt="Product Image" className="product-image" />
                    <div className="dark-overlay"></div>
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item2">
                <img src={slide2} alt="Product Image" className="product-image" />
                    <div className="dark-overlay"></div>
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item3">
                <img src={slide3} alt="Product Image" className="product-image" />
                    <div className="dark-overlay"></div>
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item4">
                <img src={slide4} alt="Product Image" className="product-image" />
                    <div className="dark-overlay"></div>
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item5">
                <img src={slide5} alt="Product Image" className="product-image" />
                    <div className="dark-overlay"></div>
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item6">
                <img src={slide6} alt="Product Image" className="product-image" />
                    
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item7">
                <img src={slide7} alt="Product Image" className="product-image" />
                   
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item8">
                <img src={slide8} alt="Product Image" className="product-image" />
                    
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item9">
                <img src={slide9} alt="Product Image" className="product-image" />
                    
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item10">
                <img src={slide10} alt="Product Image" className="product-image" />
                    
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
                <div className="product-item Product-item11">
                <img src={slide11} alt="Product Image" className="product-image" />
                    
                    <div className="overlay"></div>
                    <div className="content">
                    <h2>Web Application Development</h2>
                    <h3>Web Application Development</h3>
                    <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                </div>
            </div> */}
            <div className="Product-items" >
          {images.map((img, index) => (
            <div key={index} className={`product-item Product-item${index + 1}`}>
              <img src={img} alt={`Product ${index + 1}`} className="product-image" />
              <div className="dark-overlay"></div>
              <div className="overlay"></div>
              <div className="content">
                <h2>Web Application Development</h2>
                <h3>Web Application Development</h3>
                <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
              </div>
            </div>
          ))}
        </div>


            
        </div>
    )
}
export default ProductBlock;