import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TopGames.css';
class TopGames extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: []
		};
	}

	componentDidMount() {
		axios.get(`/api/topgames`).then((results) => {
			this.setState({ games: results.data.top });
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
								<img img style={{ borderRadius: '5px' }} src={game.game.box.medium} />
								<p>{game.game.name}</p>
								<p>{`${game.game.popularity} viwers`}</p>
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

export default TopGames;
