import { env } from '$env/dynamic/private';
import data from "$lib/data.json";

const cache: {
	issues: number | undefined;
	pullRequests: number | undefined;
	leetCodeSolves: number | undefined;
} = {
	issues: undefined,
	pullRequests: undefined,
	leetCodeSolves: undefined,
};

const headers = {
	Authorization: `token ${env.GITHUB_PAT_TOKEN}`,
	Accept: "application/vnd.github.v3+json",
	"User-Agent": "Cloudflare Worker",
};

const getStats = async () => {
	if (cache.issues && cache.pullRequests && cache.leetCodeSolves) {
		console.log("Using cache for nerd stats");
		return cache;
	}

	let issuesCount = 0;
	let pullsCount = 0;
	let leetCodeSolves = 0;

	try {
		const [issuesResponse, pullsResponse, leetCodeResponse] = await Promise.all([
			fetch("https://api.github.com/search/issues?q=user:isala404+is:issue&per_page=1", { headers }),
			fetch("https://api.github.com/search/issues?q=user:isala404+is:pull-request&per_page=1", { headers }),
			fetch("https://leetcode-stats-api.herokuapp.com/mrsupiri")
		]);

		const issuesData = await issuesResponse.json();
		issuesCount = issuesData.total_count;

		const pullsData = await pullsResponse.json();
		pullsCount = pullsData.total_count;

		const leetCodeData = await leetCodeResponse.json();
		leetCodeSolves = leetCodeData.totalSolved;
	} catch (e) {
		console.error("Failed to fetch data", e);
	}
	// Set cache
	cache.issues = issuesCount;
	cache.pullRequests = pullsCount;
	cache.leetCodeSolves = leetCodeSolves;

	return {
		issues: issuesCount,
		pullRequests: pullsCount,
		leetCodeSolves,
	};
};

export const load = async () => {
	const { issues, pullRequests, leetCodeSolves } = await getStats();
	// search though nerd stats on data.json and replace pull requests and issues counts
	// with the ones from github
	for (let i = 0; i < data["nerd-stats"].length; i++) {
		if (data["nerd-stats"][i].title === "Pull Requests Merged") {
			data["nerd-stats"][i].value = pullRequests as number;
		} else if (data["nerd-stats"][i].title === "Issues Opened") {
			data["nerd-stats"][i].value = issues as number;
		} else if (data["nerd-stats"][i].title === "LeeetCode Problems Solved") {
			data["nerd-stats"][i].value = leetCodeSolves as number;
		}
	}

	return data;
};
