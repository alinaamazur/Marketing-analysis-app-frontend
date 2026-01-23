import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import AddAccounts from './AddAccounts';
import EnterLinkPage from './EnterLinkPage';
import { useInstagramStats } from '../../../Hooks/UseInstagramStats';
import { formatNumbers } from '../../../utils/utils';
import '../Components/ComponentsCss/StatisticsPage.css';
import '../Workspace.css';

const StatisticsPage = () => {
    const today = new Date();
    const sixDaysAgo = new Date();
    sixDaysAgo.setDate(today.getDate() - 6);

    const [data, setData] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [dateRange, setDateRange] = useState([sixDaysAgo, today]);
    const [startDate, endDate] = dateRange;
    const [showModal, setShowModal] = useState(false);

    const { followersHistory, erHistory, topPosts } = useInstagramStats(data, startDate, endDate);

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
        <div className='Statistics-page'>
            {!data ? (
                <EnterLinkPage
                    onSuccess={(d) => {
                        setAccounts(prev => [...prev, d]);
                        setData(d);
                    }}
                />
            ) : (
                <div className='Statistics-page-loaded'>
                    <aside className='Add-profiles-sidebar'>
                        <AddAccounts
                            accounts={accounts}
                            setAccounts={setAccounts}
                            setData={setData}
                            openModal={() => setShowModal(true)}
                        />
                    </aside>

                    <div className='Statistics-content'>
                        <div className='Statistics-header'>
                            <div className='Profile-name'>
                                <img src={data.profile_picture_url} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
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
                        </div>

                        <div className='Statistics-blocks'>
                            <div className='Statistics-card'>
                                <span>Followers</span>
                                <strong>{formatNumbers(data.followers)}</strong>
                            </div>
                            <div className='Statistics-card'>
                                <span>Comments</span>
                                <strong>{formatNumbers(data.comments_sum)}</strong>
                            </div>
                            <div className='Statistics-card'>
                                <span>Likes</span>
                                <strong>{formatNumbers(data.likes_sum)}</strong>
                            </div>
                            <div className='Statistics-card'>
                                <span>Posts</span>
                                <strong>{formatNumbers(data.posts_count)}</strong>
                            </div>
                            <div className='Statistics-card'>
                                <span>ER</span>
                                <strong>{data.engagement_rate}</strong>
                            </div>
                        </div>

                        <Graph title="Followers" data={followersHistory} dataKey="followers" />
                        <Graph title="Engagement Rate" data={erHistory} dataKey="er" />

                        <div className='Top-posts'>
                            <h2>Top Posts</h2>
                            <div className='Top-posts-block'>
                                {topPosts.map(post => (
                                    <div className='Post-card'>
                                        <div className='Post-card-item'>
                                            <img src={post.post_url} alt='' />
                                            <div className='Post-info'>
                                                <span>❤️ {formatNumbers(post.likes)}</span>
                                                <span>💬 {formatNumbers(post.comments)}</span>
                                                <span>ER: {post.er}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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

const Graph = ({ title, data, dataKey }) => (
    <div className='Graph-block'>
        <h2>{title}</h2>
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

export default StatisticsPage;
