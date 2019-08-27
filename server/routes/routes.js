const { getTopTwitchGames,getLiveStreams,getMyFollowedStreams,getSearchChannels,followChannel,unfollowChannel } = require("../controllers/ApiController");

module.exports = app => {
	app.get(`/api/topgames`,  getTopTwitchGames);
	app.get(`/api/livestreams`,  getLiveStreams);
	app.post(`/api/streams/followed`,  getMyFollowedStreams);
	app.post(`/api/streams/streams`,  getSearchChannels);
	app.put(`/api/streams/follow`,  followChannel);
	app.delete(`/api/streams/unfollow`,unfollowChannel)
};
