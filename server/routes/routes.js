const { getTopTwitchGames,getLiveStreams,getMyFollowedStreams,getSearchChannels } = require("../controllers/ApiController");

module.exports = app => {
	app.get(`/api/topgames`,  getTopTwitchGames);
	app.get(`/api/livestreams`,  getLiveStreams);
	app.post(`/api/streams/followed`,  getMyFollowedStreams);
	app.post(`/api/streams/streams`,  getSearchChannels);
};
