require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const { json } = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.port || 3001;
const { KEY } = process.env;
console.log(KEY);
app.use(cors());
app.use(json());
routes(app);

app.get('/login', function(req, res) {
	let client_id = KEY;
	let redirect_uri = 'http://localhost:3000/#/';
	let scopes =
		'channel_check_subscription channel:read:subscriptions user_subscriptions analytics:read:games user_follows_edit user_read user_subscriptions';
	let token = `token`;
	res.redirect(
		'https://id.twitch.tv/oauth2/authorize' +
			'?response_type=' +
			token +
			'&client_id=' +
			client_id +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' +
			encodeURIComponent(redirect_uri)
	);
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
