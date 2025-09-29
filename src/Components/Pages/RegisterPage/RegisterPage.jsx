import React, { useState } from 'react';
import logo from '../../MainPage/WelcomePage/Header/HeaderIMG/logo.png';
import '../../MainPage/WelcomePage/Header/Header.css';
import '../LogInPage/LogIn.css';
import './RegisterPage.css';
import facebookIcon from '../LogInPage/LogInPageImg/FacebookIcon.png';
import googleIcon from '../LogInPage/LogInPageImg/GoogleIcon.png';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleSignUp = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!isValidPassword(password)) {
            setError(
                'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
            );
            return;
        }

        const userExists = users.find((user) => user.email === email);

        if (userExists) {
            setError('User already exists');
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            setError('');
            navigate('/log-in');
        }
    };

    return (
        <div className='Log-in-page'>
            <header className='Log-in-page-header'>
                <img src={logo} alt="Logo" className='logo Logo' />
                <div className='Log-in-header-text-section'>
                    <p className='Log-in-header-text'>Have an account?</p>
                    <button className='Log-in-header-button'>
                        <Link to="/log-in" className='Sign-up-button Blue-text'>Sign in</Link>
                    </button>
                </div>
            </header>
            <div className='Log-in-main-section'>
                <h2>Create your account</h2>
                <div className='Log-in-inputs'>
                    <input
                        type='text'
                        className='Log-in-input'
                        placeholder='First name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        className='Log-in-input'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        className='Log-in-input'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className='Log-in-button' onClick={handleSignUp}>Sign up</button>

                <div className='Divider-section'>
                    <div className='Divider'></div> or <div className='Divider'></div>
                </div>
                <div className='Log-in-inputs'>
                    <button className='Facebook-log-in Social-media-input Blue-text'>
                        <img src={facebookIcon} className='Social-icon' alt="Facebook icon" />
                        Sign up with Facebook
                    </button>
                    <button className='Google-log-in Social-media-input'>
                        <img src={googleIcon} className='Social-icon Social-icon-google' alt="Google icon" />
                        Sign up with Google
                    </button>
                </div>
                <p className='Terms-of-use'>
                    By signing up, I agree to the <span className='Blue-text Agreement-button'>Terms of Use </span>
                    and the <span className='Blue-text Agreement-button'>Privacy Policy</span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;