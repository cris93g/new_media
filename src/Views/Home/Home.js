import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import TopGames from '../../Components/TopGames/TopGames';
import Featured from '../../Components/Featured/Featured';
import LiveStreams from '../../Components/LiveStreams/LiveStreams';
import Follows from '../../Views/Followers/Followers';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: '',
			user: {}
		};
	}
	componentDidMount() {
		let url = document.location.hash,
			hash = url.split('&')[0];
		if (hash) {
			let splitted = hash.split('').slice(16).join('');
			this.setState({ token: splitted });
		}
	}

	render() {
		const { token } = this.state;
		let welp = [];

		console.log(token);
		if (token) {
			axios
				.post(`/api/me`, {
					Id: token
				})
				.then((response) => {
					welp.push(response.data);
				});
		}

		console.log(welp);
		console.log(this.state);
		return (
			<div className="Home-wrapper">
				<div className="leftW">
					<div className="left-upper">
						<h3>Follows</h3>
						<div>
							{!token ? (
								<div>
									<p>pls join in by logging into your account</p>
									<a href={`http://localhost:3001/login`}>
										<button>Log IN</button>
									</a>{' '}
								</div>
							) : (
								<Follows />
							)}
						</div>
					</div>
					<div className="left-bottom">
						<h3>Featured Channels</h3>
					</div>

					{/* <h1>HOME</h1>
					{console.log()}
					<Link to={`/followers/${token}`}>
						<button>follows</button>
					</Link>
					<a href={`http://localhost:3001/login`}>
						<button>Log IN</button>
					</a> */}
				</div>
				<div className="home-content">
					<div className="topgame">
						<Featured />
					</div>
					<div>
						<TopGames />
					</div>
					<div>
						<LiveStreams />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
