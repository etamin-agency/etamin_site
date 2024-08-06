import React, { useRef, useEffect, useState } from 'react';
import './TestimonialsPage.scss';

const TestimonialsPage = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const testimonialRightRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (testimonialRightRef.current) {
                const scrollTop = testimonialRightRef.current.scrollTop;
                const scrollHeight = testimonialRightRef.current.scrollHeight;
                const clientHeight = testimonialRightRef.current.clientHeight;
                const newScrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                setScrollPercent(newScrollPercent);
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
    }, []);

    return (
        <div className="TestimonialsPage">
            <div className='testimonial-text'>
                <h1>Innovative Ideation, Design, And<br/>
                Execution In </h1><p>One Place.</p>
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
                <div className='testimonial-imgs'></div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
