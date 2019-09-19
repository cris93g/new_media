const {
	getUser,
	getTopTwitchGames,
	getLiveStreams,
	getMyFollowedStreams,
	getSearchChannels,
	followChannel,
	unfollowChannel,
	getFeaturedStreams
} = require('../controllers/ApiController');

module.exports = (app) => {
	app.post(`/api/me`, getUser);
	app.get(`/api/topgames`, getTopTwitchGames);
	app.get(`/api/livestreams`, getLiveStreams);
	app.post(`/api/streams/followed`, getMyFollowedStreams);
	app.post(`/api/streams/search`, getSearchChannels);
	app.post(`/api/streams/follow`, followChannel);
	app.post(`/api/streams/unfollow`, unfollowChannel);
	app.get(`/api/streams/featured`, getFeaturedStreams);
};
