import React, { useState, useEffect } from 'react';
import './taglineCarousel.css';

const tagLines = [
    "This is a rather simple",
    "Automatic text scrolling effect",
    "That scrolls across",
    "An array of strings",
    "With smooth animations",
    "It is to be used",
    "In a hero section",
    "That can have",
    "Lots of different",
    "Taglines or slogans",
    "And then it wraps back around.",
    "----------"
]

const TaglineCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % tagLines.length);
        }, 2100);
        return () => clearInterval(intervalId);
    }, []);

    const getTagline = (index) => {
        return tagLines[(index + tagLines.length) % tagLines.length];
    };

    const handleAnimationEnd = (event) => {
        event.target.classList.remove("animate");
    };

    useEffect(() => {
        const elements = document.querySelectorAll(".app__animatedTaglineCarousel h1");
        elements.forEach(element => {
            element.addEventListener("animationend", handleAnimationEnd);
        });
        return () => {
            elements.forEach(element => {
                element.removeEventListener("animationend", handleAnimationEnd);
            });
        };
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll(".app__animatedTaglineCarousel h1");
        elements.forEach(element => {
            element.classList.add("animate");
        });
    }, [currentIndex]);

    return (
        <section id='taglineCarousel' className='app__animatedTaglineCarousel-container'> 
            <div className="app__hero-content-carousel app__animatedTaglineCarousel">
                <h1 style={{ opacity: 0, transform: "rotateX(40deg)" }}>{getTagline(currentIndex - 2)}</h1>
                <h1 style={{ opacity: 0.3, transform: "rotateX(20deg)" }}>{getTagline(currentIndex - 1)}</h1>
                <h1>{getTagline(currentIndex)}</h1>
                <h1 style={{ opacity: 0.3, transform: "rotateX(20deg)" }}>{getTagline(currentIndex + 1)}</h1>
                <h1 style={{ opacity: 0, transform: "rotateX(-40deg)" }}>{getTagline(currentIndex + 2)}</h1>
            </div>
        </section>
    )
}

export default TaglineCarousel