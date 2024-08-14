import React, { useRef, useEffect, useState } from 'react';
import './TestimonialsPage.scss';
import back_img from "../../assets/img/testimonials/ballon.png";
import back_img1 from "../../assets/img/testimonials/image 70.png";
import back_img2 from "../../assets/img/testimonials/image 71.png";
import back_img3 from "../../assets/img/testimonials/image 72.png";

const TestimonialsPage = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonialRightRef = useRef(null);
    const testimonialImgsRef = useRef(null);
    const images = [back_img1, back_img2, back_img3,back_img1,back_img2,back_img3];
    useEffect(() => {
        const handleScroll = () => {
            if (testimonialRightRef.current && testimonialImgsRef.current) {
                const scrollTop = testimonialRightRef.current.scrollTop;
                const scrollHeight = testimonialRightRef.current.scrollHeight;
                const clientHeight = testimonialRightRef.current.clientHeight;
                const newScrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
                setScrollPercent(newScrollPercent);
    
                // Sync the scroll position of the images section
                testimonialImgsRef.current.scrollTop = scrollTop;
    
                // Calculate active image index based on scroll position
                const maxIndex = images.length - 1;
                const newIndex = Math.min(Math.floor((scrollTop / (scrollHeight - clientHeight)) * images.length), maxIndex);
                setActiveIndex(newIndex);
            }
        };
    
        const testimonialRightElem = testimonialRightRef.current;
        if (testimonialRightElem) {
            testimonialRightElem.addEventListener('scroll', handleScroll);
        }
    
        return () => {
            if (testimonialRightElem) {
                testimonialRightElem.removeEventListener('scroll', handleScroll);
            }
        };
    }, [images.length]);

   

    return (
        <div className="TestimonialsPage">
            <div className='testimonial-text'>
                <h1>Innovative Ideation, Design, And<br />
                    Execution In</h1><p>One Place.</p>
            </div>
            <div className='testimonial-wrapper'>
                <div className='testimonial-right' ref={testimonialRightRef}>
                    <div className="scroll-indicator">
                        <div className="scroll-indicator-fill" style={{ height: `${scrollPercent}%` }}></div>
                    </div>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className='testimonial-item' key={index}>
                            <h4>{`${index + 1}/06`}</h4>
                            <h2>Ideate</h2>
                            <p>Envisioning the perfect idea & crafting tailored strategies to bridge app functionality with user efficiency.</p>
                            <button>View More  <span>→</span></button>
                        </div>
                    ))}
                </div>
                <div className='testimonial-imgs' ref={testimonialImgsRef}>
                    {images.map((img, index) => (
                        <img 
                            src={img} 
                            key={index} 
                            alt={`Testimonial ${index + 1}`} 
                            className={index === activeIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
