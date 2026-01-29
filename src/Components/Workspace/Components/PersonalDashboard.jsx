import React from 'react';
import '../Components/ComponentsCss/PersonalDashboard.css';
import '../Workspace.css';

const PersonalDashboard = () => (
    <div className='Personal-dashboard'>
        <h2 className='Personal-dashboard-title'>Your Marketing Command Center</h2>
        <p className='Personal-dashboard-description'>
            This is your personal dashboard where you can monitor activity, access
            tools, and track analytics across social media platforms.
        </p>
        <p className='Personal-dashboard-description'>From here you can:</p>
        <div className='Personal-dashboard-list'>
            <ul className='Personal-dashboard-items'>
                <li className='Dashboard-item'>Monitor your statistics.</li>
                <li className='Dashboard-item'>Compare your brand with competitors.</li>
                {/* <li className='Dashboard-item'>Perform A/B tests.</li>
                <li className='Dashboard-item'>View or download generated reports.</li> */}
                <li className='Dashboard-item'>Use Brand Tone Analysis tool.</li>
            </ul>
        </div>
    </div>
);

export default PersonalDashboard;
