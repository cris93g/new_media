const axios = require('axios');
const { KEY } = process.env;

let getUser = async (req, res) => {
	let { Id } = req.body;
	let info = await axios.get(`https://api.twitch.tv/kraken/user`, {
		headers: {
			'Client-ID': KEY,
			Authorization: `OAuth ${Id}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};
let getTopTwitchGames = async (req, res) => {
	let info = await axios.get(`https://api.twitch.tv/kraken/games/top`, {
		headers: {
			'Client-ID': KEY
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getLiveStreams = async (req, res) => {
	let info = await axios.get(`https://api.twitch.tv/kraken/streams/`, {
		headers: {
			'Client-ID': KEY
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getMyFollowedStreams = async (req, res) => {
	let { Id } = req.body;
	let info = await axios.get(`https://api.twitch.tv/kraken/streams/followed`, {
		headers: {
			'Client-ID': KEY,
			Authorization: `OAuth ${Id}`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let getSearchChannels = async (req, res) => {
	let { search } = req.body;
	let info = await axios.get(`https://api.twitch.tv/kraken/search/channels?query=${search}`, {
		headers: {
			'Client-ID': KEY
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let followChannel = async (req, res) => {
	let { channelId } = req.body;
	let { userId } = req.body;
	let info = await axios.put(`https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`, {
		headers: {
			'Client-ID': KEY
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

let unfollowChannel = async (req, res) => {
	// console.log(Id);
	let { channelId } = req.body;
	let { userId } = req.body;
	let info = await axios.delete(`https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`, {
		headers: {
			'Client-ID': KEY,
			Authorization: `OAuth q7ud3r5nezcywgru5nu7a2tfzyruxr`
		}
	});
	let results = info.data;
	if (results) {
		res.status(200).json(results);
	}
};

module.exports = {
	getTopTwitchGames,
	getLiveStreams,
	getMyFollowedStreams,
	getSearchChannels,
	followChannel,
	unfollowChannel,
	getUser
};
