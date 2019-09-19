import React, { Component } from 'react';
import axios from 'axios';

class Followers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			follow: {},
			userInfo: {},
			channel: ''
		};
		this.unfollow = this.unfollow.bind(this);
		this.clicks = this.clicks.bind(this);
	}
	componentDidMount() {
		axios
			.post(`/api/streams/followed`, {
				Id: this.props.match.params.token
			})
			.then((response) => {
				this.setState({ follow: response.data });
			});

		axios
			.post(`/api/me`, {
				Id: this.props.match.params.token
			})
			.then((response) => {
				this.setState({ userInfo: response.data });
			});
	}
	clicks(e) {
		console.log(e.currentTarget.value);
	}

	unfollow(welp) {
		console.log(this.state.userInfo._id);
		console.log(this.state.follow._id);
		console.log(this.props.match.params.token);

		axios
			.post(`/api/streams/unfollow`, {
				Id: this.props.match.params.token,
				userId: this.state.userInfo._id,
				channelId: welp
			})
			.then((response) => {
				this.setState({ user: response.data });
			});
	}
	render() {
		console.log(this.state);
		const { streams } = this.state.follow;
		const { userInfo } = this.state;
		let cha;
		console.log(userInfo);
		console.log(streams);
		return (
			<div>
				{streams ? (
					streams.map((stream) => {
						return (
							<div>
								<p>{stream.channel.display_name}</p>
								<p>{stream.channel.game}</p>
								<img style={{ width: '50px' }} src={stream.channel.logo} />
								<p>{stream.viewers}</p>
								<h1>{stream.channel._id}</h1>
								<button
									onClick={() => {
										this.unfollow(stream.channel._id);
									}}
								>
									unfollow
								</button>
							</div>
						);
					})
				) : (
					<h1>LOADING.....</h1>
				)}
			</div>
		);
	}
}

export default Followers;
