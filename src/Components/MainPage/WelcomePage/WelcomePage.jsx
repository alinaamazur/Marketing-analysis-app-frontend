import React from 'react';
import './WelcomePage.css';
import welcomePageBackground from './WelcomePageIMG/welcomePageBackground.png'
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';


const WelcomePage = () => {
    return (
        <div className='Welcome-page'>
            <img src={welcomePageBackground} className='Welcome-page-background' alt='background'></img>
            <div className='Welcome-page-content'>
                <Header />
                <MainContent />
            </div>
        </div>
    )
}

export default WelcomePage;