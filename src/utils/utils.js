export function formatNumbers(number) {
    if (number === undefined || number === null || isNaN(number)) return '0';
    if (number >= 1_000_000) return (number / 1_000_000).toFixed(1) + 'M';
    if (number >= 1_000) return (number / 1_000).toFixed(1) + 'K';
    return number.toString();
}

export function generateFakeFollowersHistory(start, end, baseFollowers) {
    const data = [];
    let currentFollowers = baseFollowers;
    let currentDate = new Date(start);

    while (currentDate <= end) {
        const spikeChance = Math.random();
        let change;

        if (spikeChance > 0.95) change = Math.floor(Math.random() * 500);
        else if (spikeChance < 0.1) change = -Math.floor(Math.random() * 50);
        else change = Math.floor(Math.random() * 80);

        currentFollowers = Math.max(0, currentFollowers + change);

        data.push({ date: new Date(currentDate), followers: currentFollowers });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}

export function mapPostsByDate(posts) {
    const map = {};
    posts.forEach(post => {
        const day = new Date(post.timestamp).toISOString().split('T')[0];
        if (!map[day]) map[day] = [];
        map[day].push(post);
    });
    return map;
}

export function calculateEr(start, end, followersHistory, posts) {
    const dataEr = [];
    const postsMap = mapPostsByDate(posts);
    let currentDate = new Date(start);

    while (currentDate <= end) {
        const key = currentDate.toISOString().split('T')[0];
        const followersDayObj = followersHistory.find(
            f => new Date(f.date).toISOString().split('T')[0] === key
        );
        const followersDay = followersDayObj?.followers ?? 0;
        const postsToday = postsMap[key] || [];
        const totalReactions = postsToday.reduce((sum, post) => sum + post.likes + post.comments, 0);
        const er = followersDay ? (totalReactions / followersDay) * 100 : 0;

        dataEr.push({ date: new Date(currentDate), er: Number(er.toFixed(2)) });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dataEr;
}

export function getTopPosts(posts, limit = 4) {
    return [...posts]
        .sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments))
        .slice(0, limit)
        .map(post => ({
            post_url: post.post_url,
            likes: post.likes,
            comments: post.comments,
            er: post.er
        }));
}
