import React, { useState } from 'react';
import '../Components/ComponentsCss/TrainingPage.css';
import '../Components/ComponentsCss/PersonalDashboard.css';
import '../Workspace.css';

const TrainingPage = () => {

    const articlesItems = [
        { id: 1, title: 'Connect your account', status: 'Done' },
        { id: 2, title: 'Check your statistics', status: 'Done' },
        { id: 3, title: 'Compare all competitors accounts', status: 'Done' },
        { id: 4, title: 'Create reports', status: 'Done' },
        { id: 5, title: 'Perform A/B tests', status: 'Done' },
        { id: 6, title: 'Make sentiment analysis', status: 'Done' },
    ];

    const [articles, setArticles] = useState(articlesItems);

    const toggleReadArticle = (id) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article.id === id
                    ? { ...article, status: article.status === 'Done' ? 'Read' : 'Done' }
                    : article
            )
        );
    };

    return (
        <div className='Training-page'>
            <h2 className='Personal-dashboard-title'>Fast training to start working</h2>
            <div className='Training-page-main-content'>
                <div className='Training-page-left-content'>
                    {articles.map((item) => (
                        <div key={item.key} className='Left-content-item'>
                            <p>{item.title}</p>
                            <button
                                className={`Left-content-item-status Status-${item.status === 'Done' ? 'green' : 'blue'}`}
                                onClick={() => toggleReadArticle(item.id)}
                            >
                                {item.status}
                            </button>
                        </div>
                    ))}
                </div>

                <div className='Training-page-right-content'>
                    <div className='Useful-information'>
                        <p>Useful information</p>
                        <ul className='Useful-information-list'>
                            <li>How to add 2 accounts?</li>
                            <li>How to delete an account?</li>
                            <li>What data is visible?</li>
                            <li>Where I can check KPI’s?</li>
                            <li>What is ER?</li>
                            <li>What should I do first?</li>
                        </ul>
                    </div>
                    <div className='Need-help-block'>
                        <p className='Need-help-title'>Need help?</p>
                        <p className='Need-help-desc'>Contact us. We'll be happy to answer any questions you have.</p>
                        <button className='Need-help-button'>Ask a question</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
