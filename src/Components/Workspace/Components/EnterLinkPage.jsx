import React, { useState } from "react";
import '../Components/ComponentsCss/EnterLinkPage.css'

const EnterLinkPage = ({ onSuccess }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!value.trim()) return;

        setLoading(true);
        setError('');

        try {
            const res = await fetch(
                `http://localhost:8000/api/instagram/analysis?url=${encodeURIComponent(value)}`
            );

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.detail || 'Invalid link');
            }

            localStorage.setItem('instagramLink', value);
            onSuccess(json);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Enter-link-page'>
            <form onSubmit={handleSubmit}>
                <h2 className='Enter-link-text'>
                    To access statistics, please enter the link to the profile
                </h2>
                <input
                    className='Enter-link-input'
                    type='text'
                    placeholder='Enter Instagram link'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                {error && <p className='Enter-link-error'>{error}</p>}

                <button className='Enter-link-button'>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default EnterLinkPage;
