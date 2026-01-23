import { useState, useEffect } from 'react';
import { generateFakeFollowersHistory, calculateEr, getTopPosts } from '../utils/utils.js';

export function useInstagramStats(data, startDate, endDate) {
    const [followersHistory, setFollowersHistory] = useState([]);
    const [erHistory, setErHistory] = useState([]);
    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
        if (!data || !startDate || !endDate) return;

        const fakeFollowers = generateFakeFollowersHistory(startDate, endDate, data.followers);
        setFollowersHistory(fakeFollowers);

        const er = calculateEr(startDate, endDate, fakeFollowers, data.posts);
        setErHistory(er);

        if (data.posts) {
            setTopPosts(getTopPosts(data.posts));
        }
    }, [data, startDate, endDate]);

    return { followersHistory, erHistory, topPosts };
}
