import React from "react";
import logo from '../WelcomePage/Header/HeaderIMG/logo.png';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='Welcome-page-footer'>
            <div className='Footer'>
                <div className='Footer-left'>
                    <div className="Logo-section">
                        <img src={logo} alt='logo' className='Logo' />
                        <p className='Left-text'>Social Media Content Analytics Tool</p>
                    </div>
                    <div className='Support-section'>
                        <p className='Support-text'>Support:</p>
                        <p className='Support-email'>support@likely.com</p>
                    </div>
                    <div className='Copyright'>
                        Copyright © 2025. All rights reserved.
                    </div>
                </div>

                <div className="Footer-right">
                    <div className='Footer-products'>
                        <h2 className='Products'>PRODUCT</h2>
                        <ul className='Products-list'>
                            <ul className='Products-list'>
                                <li><Link to='/log-in' className='Footer-link'>Account Statistics</Link></li>
                                <li><Link to='/log-in' className='Footer-link'>Competitor Tracking</Link></li>
                                <li><Link to='/log-in' className='Footer-link'>A/B Testing</Link></li>
                                <li><Link to='/log-in' className='Footer-link'>Report Generation</Link></li>
                                <li><Link to='/log-in' className='Footer-link'>Sentiment Analysis</Link></li>
                            </ul>

                        </ul>
                    </div>

                    <div className='Footer-about-us'>
                        <h2 className='About-us'>COMPANY</h2>
                        <ul className='About-us-list'>
                            <li className='Footer-link'>About</li>
                            <li className='Footer-link'>Privacy</li>
                            <li className='Footer-link'>Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
