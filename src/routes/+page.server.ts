import data from '$lib/data.json';

const cache = {
    issues: undefined,
    pullRequests: undefined,
    leetCodeSolves: undefined,
};

const getStats = async () => {
    if (cache.issues && cache.pullRequests && cache.leetCodeSolves) {
        console.log('Using cache for nerd stats');
        return cache;
    }

    // Get user token
    const headers = {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
    };

    // Get issues
    const issuesResponse = await fetch('https://api.github.com/search/issues?q=user:MrSupiri+is:issue&per_page=1', { headers });
    const issuesData = await issuesResponse.json();
    const issuesCount = issuesData.total_count;

    // Get pull requests
    const pullsResponse = await fetch('https://api.github.com/search/issues?q=user:MrSupiri+is:pull-request&per_page=1', { headers });
    const pullsData = await pullsResponse.json();
    const pullsCount = pullsData.total_count;

    // Get leetcode solves
    const leetCodeResponse = await fetch('https://leetcode-stats-api.herokuapp.com/mrsupiri');
    const leetCodeData = await leetCodeResponse.json();
    const leetCodeSolves = leetCodeData.totalSolved;

    // Set cache
    cache.issues = issuesCount;
    cache.pullRequests = pullsCount;
    cache.leetCodeSolves = leetCodeSolves;

    return {
        issues: issuesCount,
        pullRequests: pullsCount,
        leetCodeSolves,
    };
}


export const load = async () => {
    const { issues, pullRequests, leetCodeSolves } = await getStats();
    console.log(issues, pullRequests);
    // search though nerd stats on data.json and replace pull requests and issues counts
    // with the ones from github
    for (let i = 0; i < data["nerd-stats"].length; i++) {
        if (data["nerd-stats"][i].title === 'Pull Requests Merged') {
            data["nerd-stats"][i].value = pullRequests;
        } else if (data["nerd-stats"][i].title === 'Issues Opened') {
            data["nerd-stats"][i].value = issues;
        } else if (data["nerd-stats"][i].title === 'LeeetCode Problems Solved') {
            data["nerd-stats"][i].value = leetCodeSolves;
        }
    }

    return data;
};
