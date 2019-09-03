import React, { Component } from 'react';
import axios from 'axios';

class Followers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			follow: {},
			user: {}
		};
		this.unfollow = this.unfollow.bind(this);
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
				this.setState({ user: response.data });
			});
	}

	unfollow(e) {
		console.log(this.props.match.params.token);
		axios
			.delete(`/api/streams/unfollow`, {
				// Id: this.props.match.params.token,
				userId: this.state.user._id,
				channelId: this.state.follow._id
			})
			.then((response) => {
				this.setState({ user: response.data });
			});
	}
	render() {
		console.log(this.state.follow);
		const { streams } = this.state.follow;
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
								<button
									onClick={() => {
										this.unfollow();
									}}
								/>
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
