import React, { useState } from 'react';
import logo from '../../MainPage/WelcomePage/Header/HeaderIMG/logo.png';
import '../../MainPage/WelcomePage/Header/Header.css';
import './LogIn.css';
import facebookIcon from './LogInPageImg/FacebookIcon.png';
import googleIcon from './LogInPageImg/GoogleIcon.png';
import { Link, useNavigate } from 'react-router-dom';

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'admin' && password === 'admin') {
            setError('');
            navigate('/my-workspace');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email);

        if (!user) {
            setError('User does not exist');
        } else if (user.password !== password) {
            setError('Incorrect password');
        } else {
            setError('');
            navigate('/my-workspace');
        }
    };

    return (
        <div className='Log-in-page'>
            <header className='Log-in-page-header'>
                <img src={logo} alt="Logo" className='logo Logo' />
                <div className='Log-in-header-text-section'>
                    <p className='Log-in-header-text'>Don't have an account?</p>
                    <button className='Log-in-header-button'>
                        <Link to="/sign-up" className='Sign-up-button Blue-text'>Sign up</Link>
                    </button>
                </div>
            </header>
            <div className='Log-in-main-section'>
                <h2>Log in</h2>
                <div className='Log-in-inputs'>
                    <input type='email' className='Log-in-input' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' className='Log-in-input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className='Log-in-button' onClick={handleLogin}>Log in</button>

                <div className='Divider-section'><div className='Divider'></div> or <div className='Divider'></div></div>
                <div className='Log-in-inputs'>
                    <button className='Facebook-log-in Social-media-input Blue-text'>
                        <img src={facebookIcon} alt='' className='Social-icon' />
                        Log in with Facebook
                    </button>
                    <button className='Google-log-in Social-media-input'>
                        <img src={googleIcon} alt='' className='Social-icon Social-icon-google' />
                        Log in with Google
                    </button>
                </div>
                <button className='Log-in-header-button Forgot-password-text Blue-text'>Forgot password?</button>
            </div>
        </div>
    );
};

export default LogInPage;