import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LiveStreams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: []
		};
	}

	componentDidMount() {
		axios.get(`/api/livestreams`).then((results) => {
			this.setState({ games: results.data.streams });
		});
	}
	render() {
		const { games } = this.state;
		console.log(games);
		return (
			<div className="Top-Games">
				{games ? (
					games.map((game) => {
						return (
							<div>
								<img style={{ borderRadius: '5px' }} src={game.preview.medium} />
								<p>{game.channel.name}</p>
								<p>{game.channel.game}</p>
							</div>
						);
					})
				) : (
					''
				)}
			</div>
		);
	}
}

export default LiveStreams;
