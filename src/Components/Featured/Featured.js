import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Featured extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: []
		};
	}

	componentDidMount() {
		axios.get(`/api/streams/featured`).then((results) => {
			this.setState({ games: results.data.featured });
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
								<img style={{ borderRadius: '5px' }} src={game.stream.preview.medium} />
								<p>{game.stream.channel.name}</p>
								<p>{game.stream.game}</p>
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

export default Featured;
