import React from 'react';
import Slider from 'react-slick';
import item1 from '../../assets/img/servic/slide1.png';
import './Product.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductBlock = () => {
    var settings = {
        infinite: true,
        
        slidesToShow: 4.6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false,
    };

    return (
        <div className="ProductBlock">
            <div className='Product-title'>
                <h2>At your fingertips</h2>
                <h1>OUR SERVICES</h1>
                
            </div>
            
            
            <Slider {...settings} className='Product-items'>
            
                <div className="Product-item1">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item2">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item3">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item4">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item5">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item6">
                   
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item7">
                    
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item8">
                   
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item9">
                    
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item10">
                    
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                 <div className="Product-item11">
                    
                    <div className="content">
                        <h2>Web Application Development</h2>
                        <p>Our web application development experts create modern and functional websites to ensure your business thrives in the online space. We develop flexible and multi-functional platforms tailored to various industries.</p>
                    </div>
                 </div>
                
                
               
                
            
            </Slider>
            
        </div>
    )
}
export default ProductBlock;