import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";

import AccountStatisticsImg from "./OffersIMG/AccountStatistics.png";
import CompetitorTrackingImg from "./OffersIMG/CompetitorTracking.png";
import ABTestingImg from "./OffersIMG/ABTesting.png";
import ReportGenerationImg from "./OffersIMG/ReportGeneration.png";
import SentimentAnalysisImg from "./OffersIMG/SentimentAnalysis.png";
import Bubble from "./OffersIMG/Bubble.png";

const offersItems = [
    {
        key: 'Account-statistics',
        title: 'Account Statistics',
        description: `Track and analyze every meaningful interaction your users have with
                        your platform through powerful, real- time account - level analytics.
                        These insights empower you to segment your audience, identify power
                        users, uncover bottlenecks, and drive personalization at scale.
                        Whether you're optimizing onboarding flows or tracking customer
                        health, Account Statistics delivers the granular data you need to
                        make impactful, user - centered decisions.`,
        img: AccountStatisticsImg,
    },
    {
        key: 'Competitor-tracking',
        title: 'Competitor Tracking',
        description: `Understand your market landscape like never before. Competitor
                    Tracking allows you to monitor your key rivals across multiple
                    digital touchpoints — websites, ad campaigns, content updates, SEO
                    performance, pricing changes, and more. With automated benchmarking
                    and trend analysis, you can anticipate moves, spot gaps in the
                    market, and confidently refine your positioning and strategy to
                    maintain a competitive edge.`,
        img: CompetitorTrackingImg,
        reverse: true,
    },
    {
        key: 'Report-generation',
        title: 'Report Generation',
        description: `Turn raw data into polished, professional-grade reports in minutes —
                    no spreadsheets required. Report Generation lets you compile and
                    visualize your key performance indicators across marketing, sales,
                    product, and user experience in fully customizable dashboards and
                    PDF reports. Schedule automated reports for your team, investors, or
                    stakeholders, and deliver clarity with visual charts, clear
                    narratives, and actionable takeaways.`,
        img: ReportGenerationImg,
    },
    {
        key: 'A-B-testing',
        title: 'A/B Testing',
        description: `Unlock the full potential of experimentation with a robust A/B
                    Testing engine designed for marketers, product teams, and growth
                    professionals. Measure statistically significant differences in user
                    behavior, conversion rates, and engagement metrics. Use these
                    insights to validate ideas, reduce guesswork, and implement only the
                    strategies that are proven to drive real results.`,
        img: ABTestingImg,
        reverse: true,
    },
    {
        key: 'Sentiment-analysis',
        title: 'Sentiment Analysis',
        description: `Go beyond numbers and understand the emotions behind the feedback.
                    With advanced NLP-powered Sentiment Analysis, you can scan and
                    interpret large volumes of user-generated content — including
                    product reviews, social media posts, support tickets, and surveys —
                    to detect tone, intent, and satisfaction. Identify emerging trends,
                    track public perception over time, and quickly respond to shifts in
                    customer sentiment.`,
        img: SentimentAnalysisImg,
    },
];

const Offers = () => (

    <div className="Offers">
        <img className="First-bubble Bubble" src={Bubble} alt="Bubble" />
        <h2 className="Offers-header">
            We help you understand what your audience{" "}
            <span className="Blue-text">really wants</span>
        </h2>

        <img src={Bubble} alt='' className='Header-bubble Bubble' />

        <div className="Offers-items">
            {offersItems.map((item) => (
                <div className={`Offers-section ${item.reverse ? 'Reverse' : ''}`}>
                    <div className='Offers-section-content'>
                        <h3 className='Offers-section-header Blue-text'>{item.title}</h3>
                        <p className='Offers-section-text'>{item.description}</p>
                        <Link to='/log-in'>
                            <button className='Offers-section-button'>GET STARTED</button>
                        </Link>
                    </div>

                    <div className={`${item.key}-img-wrapper`}>
                        <img src={item.img} alt={item.title} className={`${item.key}-img`} />
                    </div>

                    <img src={Bubble} alt='' className={`${item.key}-bubble Bubble`} />
                </div>
            ))}
        </div>
    </div>
);

export default Offers;
