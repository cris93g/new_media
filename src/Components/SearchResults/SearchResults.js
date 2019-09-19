import React, { Component } from 'react';
import axios from 'axios';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
	}

	componentDidMount() {
		axios
			.post(`/api/streams/search`, {
				search: this.props.match.params.words
			})
			.then((response) => {
				this.setState({
					results: response.data
				});
			});
	}

	render() {
		console.log(this.props.match.params);
		console.log(this.state);
		return <div />;
	}
}

export default SearchResults;
