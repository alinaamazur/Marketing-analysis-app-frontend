import { useEffect, useState } from "react";
import AddAccounts from './AddAccounts';
import EnterLinkPage from './EnterLinkPage';
import '../Components/ComponentsCss/BrandTone.css'
import '../Components/ComponentsCss/StatisticsPage.css';

const BrandTonePage = () => {
    const [data, setData] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('statisticsData');
        const savedAccounts = localStorage.getItem('statisticsAccounts');

        if (savedData) setData(JSON.parse(savedData));
        if (savedAccounts) setAccounts(JSON.parse(savedAccounts));
    }, []);

    const SentimentBar = ({ label, data, color }) => (
        <div className='Sentiment-row'>
            <span className='Sentiment-label'>
                {label}
            </span>

            <div className='Sentiment-bar'>
                <div
                    className='Sentiment-bar-fill'
                    style={{
                        width: `${data.percent || 0}%`,
                        backgroundColor: color
                    }}
                />
            </div>
        </div>
    );

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
        <div className='Brand-tone-page'>
            {!data ? (
                <EnterLinkPage
                    onSuccess={(d) => {
                        setAccounts(prev => [...prev, d]);
                        setData(d);
                    }}
                />
            ) : (
                <div className='Brand-tone-page-loaded'>
                    <aside className='Add-profiles-sidebar'>
                        <AddAccounts
                            accounts={accounts}
                            setAccounts={setAccounts}
                            setData={setData}
                            openModal={() => setShowModal(true)}
                        />
                    </aside>
                    <div className='Brand-tone-content'>
                        <h2>Brand Tone Summary</h2>
                        <p> — this section provides an overview of how the brand positions itself
                            through its own content. It is based on the analysis of the captions and
                            text of the brand’s last 200 posts. The summary classifies the brand’s
                            messaging as Positive, Neutral, or Negative, giving insight into the
                            general tone and style the brand uses in its communications.</p>

                        <SentimentBar
                            label='Positive'
                            data={data.sentiment_summary.Positive}
                            color='#7fd28eff'
                        />

                        <SentimentBar
                            label='Neutral'
                            data={data.sentiment_summary.Neutral}
                            color='#9e9c9cff'
                        />

                        <SentimentBar
                            label='Negative'
                            data={data.sentiment_summary.Negative}
                            color='#fa9d9dff'
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
    )
};

export default BrandTonePage;