import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			words: ''
		};

		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e) {
		this.setState({ words: e.target.value });
	}

	render() {
		const { words } = this.state;
		return (
			<div>
				<input
					className="inpu"
					onChange={(e) => this.onChangeHandler(e)}
					style={{ width: '300px', height: '35px', borderRadius: '10px' }}
				/>
				<Link to={`/search/${words}`}>
					<button>submit</button>
				</Link>
			</div>
		);
	}
}

export default Search;
