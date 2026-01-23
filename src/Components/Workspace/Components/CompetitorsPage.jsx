import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddAccounts from './AddAccounts';
import EnterLinkPage from './EnterLinkPage';
import { useInstagramStats } from '../../../Hooks/UseInstagramStats';
import { formatNumbers } from '../../../utils/utils';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../Components/ComponentsCss/CompetitorsPage.css';
import '../Workspace.css';

const CompetitorsPage = () => {
    const today = new Date();
    const sixDaysAgo = new Date();
    sixDaysAgo.setDate(today.getDate() - 6);

    const [data, setData] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [dateRange, setDateRange] = useState([sixDaysAgo, today]);
    const [startDate, endDate] = dateRange;
    const [showModal, setShowModal] = useState(false);

    const { followersHistory, erHistory } = useInstagramStats(data, startDate, endDate);

    useEffect(() => {
        const savedData = localStorage.getItem('statisticsData');
        const savedAccounts = localStorage.getItem('statisticsAccounts');

        if (savedData) setData(JSON.parse(savedData));
        if (savedAccounts) setAccounts(JSON.parse(savedAccounts));
    }, []);

    useEffect(() => {
        if (data) {
            localStorage.setItem('statisticsData', JSON.stringify(data));
        }
    }, [data]);

    useEffect(() => {
        if (accounts.length) {
            localStorage.setItem('statisticsAccounts', JSON.stringify(accounts));
        }
    }, [accounts]);

    return (
        <div className='Competitors-page'>
            {!data ? (
                <EnterLinkPage
                    onSuccess={(d) => {
                        setAccounts(prev => [...prev, d]);
                        setData(d);
                    }}
                />
            ) : (
                <div className='Competitors-page-loaded'>
                    <aside className='Add-profiles-sidebar'>
                        <AddAccounts
                            accounts={accounts}
                            setAccounts={setAccounts}
                            setData={setData}
                            openModal={() => setShowModal(true)}
                        />
                    </aside>

                    <div className='Competitors-content'>
                        <div className='Date-picker'>
                            <DatePicker
                                selectsRange
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={new Date()}
                                onChange={setDateRange}
                                dateFormat='dd.MM.yyyy'
                                className='Calendar-input'
                            />
                        </div>

                        <div className='Competitors-block'>
                            <p className='Competitors-title'>Accounts</p>
                            <p className='Competitors-title'>Followers</p>
                            <p className='Competitors-title'>Posts</p>
                            <p className='Competitors-title'>Likes</p>
                            <p className='Competitors-title'>Comments</p>
                            <p className='Competitors-title'>ER</p>

                            {accounts.map((account, idx) => (
                                <CompetitorItem key={idx} data={account} />
                            ))}
                        </div>

                        <Graph
                            title="Followers"
                            profile_name={data.name}
                            data={followersHistory}
                            dataKey="followers"
                        />
                        <Graph
                            title="Engagement Rate"
                            profile_name={data.name}
                            data={erHistory}
                            dataKey="er"
                        />

                    </div>
                </div>
            )}

            {showModal && (
                <div className="Modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="Modal-content" onClick={e => e.stopPropagation()}>
                        <EnterLinkPage
                            onSuccess={(d) => {
                                setAccounts(prev => [...prev, d]);
                                setData(d);
                                setShowModal(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const CompetitorItem = ({ data }) => (
    <div className='Competitor-row'>
        <div className='Competitors-account'>
            <img src={data.profile_picture_url} alt={data.name} />
            <p>{data.name}</p>
        </div>

        <p>{formatNumbers(data.followers)}</p>
        <p>{formatNumbers(data.posts_count)}</p>
        <p>{formatNumbers(data.likes_sum)}</p>
        <p>{formatNumbers(data.comments_sum)}</p>
        <p>{formatNumbers(data.engagement_rate)}</p>
    </div>
);

const Graph = ({ title, profile_name, data, dataKey }) => (
    <div className='Graph-block'>
        <h2>{title} - {profile_name}</h2>
        <ResponsiveContainer width='95%' height={400} className='Followers-graph'>
            <LineChart data={data} margin={{ right: 10, bottom: 30, left: 15 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis
                    dataKey='date'
                    tickFormatter={(date) => new Date(date).toLocaleDateString('ru-RU')}
                    tickMargin={23}
                />
                <YAxis
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => {
                        if (value >= 1_000_000) {
                            return (value / 1_000_000).toFixed(1) + 'M';
                        }

                        if (value >= 1_000) {
                            return (value / 1_000).toFixed(1) + 'K';
                        }

                        return value;
                    }}
                />
                <Tooltip labelFormatter={(date) => new Date(date).toLocaleDateString('ru-RU')}
                />
                <Line type='monotone' dataKey={dataKey} stroke='#8884d8' />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default CompetitorsPage;
