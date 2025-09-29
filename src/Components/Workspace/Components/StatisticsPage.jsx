import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Components/ComponentsCss/StatisticsPage.css';
import '../Workspace.css';
import cat1 from '../Icons/topposts1.png';
import cat2 from '../Icons/topposts2.png';
import cat3 from '../Icons/topposts3.png';
import cat4 from '../Icons/topposts4.png';
import companyicon from '../Icons/companyicon.png';
import folowersgraph from '../Icons/folowersgraph.png';
import viewsgraph from '../Icons/viewsgraph.png';
import ergraph from '../Icons/ergraph.png';

const topPosts = [
    { id: 1, img: cat1, likes: 1000, comments: 500, er: 0.1 },
    { id: 2, img: cat2, likes: 1000, comments: 500, er: 0.1 },
    { id: 3, img: cat3, likes: 1000, comments: 500, er: 0.1 },
    { id: 4, img: cat4, likes: 900, comments: 500, er: 0.1 },
];

const StatisticsPage = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='Statistics-page'>
            <aside className='Add-profiles-sidebar'>
                <div className='Sidebar-icons'>
                    <img src={companyicon} alt='' />
                    <button>+</button>
                    <button>+</button>
                    <button>+</button>
                </div>
            </aside>

            <div className='Statistics-content'>
                <div className='Statistics-header'>
                    <div className='Profile-name'>
                        <img src={companyicon} alt='Company' />
                        <p>Meow company</p>
                    </div>
                    <div className='Date-picker'>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat='dd.MM.yyyy'
                            className='Calendar-input'
                        />
                    </div>
                </div>

                <div className='Statistics-blocks'>
                    <div className='Statistics-card'>
                        <span>Followers</span>
                        <strong>500 000</strong>
                    </div>
                    <div className='Statistics-card'>
                        <span>Comments</span>
                        <strong>2 000</strong>
                    </div>
                    <div className='Statistics-card'>
                        <span>Likes</span>
                        <strong>10 000</strong>
                    </div>
                    <div className='Statistics-card'>
                        <span>Reports</span>
                        <strong>500</strong>
                    </div>
                    <div className='Statistics-card'>
                        <span>ER</span>
                        <strong>0.11</strong>
                    </div>
                </div>

                <div className='Graph-block'>
                    <h2>Followers</h2>
                    <img src={folowersgraph} alt='Followers Graph' />
                </div>
                <div className='Graph-block'>
                    <h2>Views</h2>
                    <img src={viewsgraph} alt='Views Graph' />
                </div>
                <div className='Graph-block'>
                    <h2>Engagement Rate</h2>
                    <img src={ergraph} alt='Engagement Rate Graph' />
                </div>

                <div className='Top-posts'>
                    <h2>Top Posts</h2>
                    <div className='Top-posts-block'>
                        {topPosts.map(post => (
                            <div className='Post-card' key={post.id}>
                                <div className='Post-card-item'>
                                    <img src={post.img} alt={`Cat ${post.id}`} />
                                    <div className='Post-info'>
                                        <span>❤️ {post.likes}</span>
                                        <span>💬 {post.comments}</span>
                                        <span>ER: {post.er}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
