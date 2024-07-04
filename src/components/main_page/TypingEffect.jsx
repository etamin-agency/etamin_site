import React, { useEffect, useState } from 'react';

const TypingEffect = ({ texts, typingSpeed = 200, deletingSpeed = 175, pauseTime = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentIndex];
            const updatedText = isDeleting
                ? currentText.slice(0, displayedText.length - 1)
                : currentText.slice(0, displayedText.length + 1);

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        };

        const typingInterval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, texts, currentIndex, typingSpeed, deletingSpeed, pauseTime]);

    return <span>{displayedText}</span>;
};

export default TypingEffect;
