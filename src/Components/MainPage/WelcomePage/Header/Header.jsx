import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './HeaderIMG/logo.png';
import arrow from './HeaderIMG/arrow.png';

const Header = () => {
    const [isToolOpen, setIsToolOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState('');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('EN');

    const toggleToolDropdown = () => setIsToolOpen(!isToolOpen);
    const toggleLangDropdown = () => setIsLangOpen(!isLangOpen);

    const handleSelectTool = (tool) => {
        setSelectedTool(tool);
        setIsToolOpen(false);
    };

    const handleSelectLang = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    const dropdownOptions = [
        { key: 'Account Statistics', title: 'Account Statistics', description: 'Track user behavior and key metrics in real time' },
        { key: 'Competitor Tracking', title: 'Competitor Tracking', description: 'Monitor strategies, pricing campaigns of your competitors' },
        { key: 'Report Generation', title: 'Report Generation', description: 'Automatically create reports to measure performance' },
        { key: 'A/B Testing', title: 'A/B Testing Tool', description: 'Compare versions of content to see what performs best' },
        { key: 'Sentiment Analysis', title: 'Sentiment Analysis', description: 'Analyze feedback to understand public sentiment' },
    ];

    return (
        <header className="App-header">
            {/* Logo */}
            <div className="Left-header">
                <img src={logo} alt="Logo" className="Logo" />
            </div>

            {/* Central header */}
            <div className="Central-header">
                {/* Tools dropdown */}
                <div className="Header-arrow" onClick={toggleToolDropdown}>
                    <p>Tools</p>
                    <img src={arrow} alt="arrow" className={`Arrow ${isToolOpen ? 'Open' : ''}`} />
                    {isToolOpen && (
                        <div className="Tool-options-dropdown">
                            {dropdownOptions.map((tool) => (
                                <Link
                                    key={tool.key}
                                    to="/log-in"
                                    className={`Dropdown-tool-item-wrap ${selectedTool === tool.key ? 'Active' : ''}`}
                                    onClick={() => handleSelectTool(tool.key)}
                                >
                                    <div className="Dropdown-tool-item">
                                        <h3 className="Dropdown-tool-item-header Blue-text">{tool.title}</h3>
                                        <p className="Dropdown-tool-item-text">{tool.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <Link to="/blog" className="Header-item">Blog</Link>
                <Link to="/FAQ" className="Header-item">FAQ</Link>
            </div>

            {/* Right header */}
            <div className="Right-header">
                <Link to="/log-in">
                    <button className="Header-item Log-in-text">Log in</button>
                </Link>
                <Link to="/sign-up" className="Register-text">
                    <p className="Header-item">Register</p>
                </Link>

                {/* Language dropdown */}
                <div className="Header-arrow" onClick={toggleLangDropdown}>
                    <p className="Language Active">{selectedLang}</p>
                    <img src={arrow} alt="arrow" className={`Arrow ${isLangOpen ? 'Open' : ''}`} />
                    {isLangOpen && (
                        <div className="Language-dropdown">
                            <div
                                className={`Dropdown-item ${selectedLang === 'EN' ? 'Active' : ''}`}
                                onClick={() => handleSelectLang('EN')}
                            >
                                EN
                            </div>
                            <div
                                className={`Dropdown-item ${selectedLang === 'PL' ? 'Active' : ''}`}
                                onClick={() => handleSelectLang('PL')}
                            >
                                PL
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
