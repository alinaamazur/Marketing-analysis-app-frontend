import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Components/ComponentsCss/CompetitorsPage.css';
import '../Components/ComponentsCss/StatisticsPage.css';
import '../Components/ComponentsCss/PersonalDashboard.css';
import '../Workspace.css';

import companyicon from '../Icons/companyicon.png';
import dogcompany from '../Icons/dogcompany.png';
import viewsgraph from '../Icons/viewsgraph.png';

const CompetitorsPage = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='Competitors-page'>
            <aside className='Add-profiles-sidebar'>
                <div className='Sidebar-icons'>
                    <img src={companyicon} alt='' />
                    <img src={dogcompany} alt='' />
                    <button>+</button>
                    <button>+</button>
                </div>
            </aside>

            <div className='Competitors-content'>
                <div className='Date-picker'>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat='dd.MM.yyyy'
                        className='Calendar-input'
                    />
                </div>

                <div className='Competitors-block'>
                    <div className='Competitors-block-title'>
                        <p>Accounts</p>
                        <div className='Competitors-block-metrics'>
                            <p>Folowers</p>
                            <p>Posts</p>
                            <p>Likes</p>
                            <p>Comments</p>
                            <p>ER</p>
                        </div>
                    </div>

                    <div className='Competitors-block-item'>
                        <div className='Competitors-account'>
                            <img src={companyicon} alt='' />
                            <p>Meow Company</p>
                        </div>
                        <div className='Competitors-metrics-results'>
                            <p>1,000,000</p>
                            <p>10,000</p>
                            <p>200,000</p>
                            <p>2000</p>
                            <p>20.2%</p>
                        </div>
                    </div>

                    <div className='Competitors-block-item'>
                        <div className='Competitors-account'>
                            <img src={dogcompany} alt='' />
                            <p>Woof Company</p>
                        </div>
                        <div className='Competitors-metrics-results'>
                            <p>1,000,000</p>
                            <p>10,000</p>
                            <p>200,000</p>
                            <p>2000</p>
                            <p>20.2%</p>
                        </div>
                    </div>

                    <div className='Competitors-total'>
                        <p>Total</p>
                        <div className='Competitors-metrics-total'>
                            <p>2,000,000</p>
                            <p>20,000</p>
                            <p>400,000</p>
                            <p>2000</p>
                            <p>20.2%</p>
                        </div>
                    </div>
                </div>

                <div className='Results-block'>
                    <div className='Results-block-title'>
                        <p>Folowers</p>
                        <p>Posts</p>
                        <p>Likes</p>
                        <p>Comments</p>
                        <p>ER</p>
                    </div>

                    <div className='Results-metrics'>
                        <div className='Results-block-accounts'>
                            <div className='Results-block-accounts-item'>
                                <img src={companyicon} alt='' />
                                <p>Meow Company</p>
                            </div>
                            <div className='Results-block-accounts-item'>
                                <img src={dogcompany} alt='' />
                                <p>Woof Company</p>
                            </div>
                        </div>
                        <div className='Results-graphs'>
                            <img src={viewsgraph} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitorsPage;
