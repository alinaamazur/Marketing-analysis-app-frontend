import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Examples.css';

import Slider1 from './ExamplesIMG/Slider1.png';
import Slider2 from './ExamplesIMG/Slider2.png';
import Slider3 from './ExamplesIMG/Slider3.png';

const sliders = [Slider1, Slider2, Slider3];

const Examples = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='Examples'>
            <div className='Blue-background'>
                <div className='Examples-header-text'>
                    <h2 className='Examples-main-header'>
                        <span className='Blue-text'>LIKELY </span>
                        is your all-in-one social media intelligence platform
                    </h2>
                    <p className='Example-text'>
                        We connect to your favourite platforms — like Instagram, Facebook, YouTube
                        — and analyse everything from user engagement to competitor performance.
                    </p>
                </div>

                <div className='Examples-photos'>
                    <div className='Examples-slider'>
                        <button className='Slider-arrow Left' onClick={handlePrev}>
                            &#8592;
                        </button>
                        <div className='Examples-photo-wrapper'>
                            <img
                                className='Examples-photo_slider'
                                src={sliders[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                            />
                        </div>
                        <button className='Slider-arrow Right' onClick={handleNext}>
                            &#8594;
                        </button>
                    </div>
                    <div className='Slider-dots'>
                        {sliders.map((_, index) => (
                            <span
                                key={index}
                                className={`Dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className='Call-to-action'>
                    <div className='Call-to-action-question'>
                        <h2>The result?</h2>
                    </div>
                    <div className='Call-to-action-text'>
                        <h2>
                            <span className='Red-text'>Smarter </span> decisions.
                            <span className='Red-text'> Faster </span> growth.
                            <span className='Red-text'> More </span> impact.
                        </h2>
                    </div>
                    <Link to='/log-in'>
                        <button className='Left-content-button'>Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Examples;
