import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hamburger from '../../assets/Hamburger';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: '',
			user: {}
		};
		// this.getToken= this.getToken.bind(this)
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
		function log() {
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
		}

		log();
		console.log(welp);
		console.log(this.state);
		return (
			<div>
				<h1>HOME</h1>
				{console.log()}
				<Link to={`/followers/${token}`}>
					<button>follows</button>
				</Link>
				<a href={`http://localhost:3001/login`}>
					<button>Log IN</button>
				</a>
				<div />
			</div>
		);
	}
}

export default Home;
