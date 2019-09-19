import React, { Component } from 'react';
import './Nav.css';
import Search from '../Search/Search';
class Nav extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="logo">logo</div>
				<div className="search-wrapper">
					<Search />
				</div>
			</div>
		);
	}
}

export default Nav;
