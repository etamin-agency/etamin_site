import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialsPage.scss';
import back_img1 from "../../assets/img/testimonials/image 70.png";
import back_img2 from "../../assets/img/testimonials/image 71.png";
import back_img3 from "../../assets/img/testimonials/image 72.png";

const TestimonialsPage = () => {
    const { t } = useTranslation();
    const [scrollPercent, setScrollPercent] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonialRightRef = useRef(null);
    const testimonialImgsRef = useRef(null);
    const images = [back_img1, back_img2, back_img3, back_img1, back_img2, back_img3];

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
                <h1>{t('testimonials_title')}</h1>
                <p>{t('testimonials_subtitle')}</p>
            </div>
            <div className='testimonial-wrapper'>
                <div className='testimonial-right' ref={testimonialRightRef}>
                    <div className="scroll-indicator">
                        <div className="scroll-indicator-fill" style={{ height: `${scrollPercent}%` }}></div>
                    </div>
                    
                    <div className='testimonial-item'>
                        <h4>1/06</h4>
                        <h2>{t('step_ideate')}</h2>
                        <p>{t('step_ideate_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
                    <div className='testimonial-item'>
                        <h4>2/06</h4>
                        <h2>{t('step_design')}</h2>
                        <p>{t('step_design_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
                    <div className='testimonial-item'>
                        <h4>3/06</h4>
                        <h2>{t('step_develop')}</h2>
                        <p>{t('step_develop_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
                    <div className='testimonial-item'>
                        <h4>4/06</h4>
                        <h2>{t('step_test')}</h2>
                        <p>{t('step_test_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
                    <div className='testimonial-item'>
                        <h4>5/06</h4>
                        <h2>{t('step_launch')}</h2>
                        <p>{t('step_launch_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
                    <div className='testimonial-item'>
                        <h4>6/06</h4>
                        <h2>{t('step_support')}</h2>
                        <p>{t('step_support_description')}</p>
                        <button>{t('view_more')} <span>→</span></button>
                    </div>
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
