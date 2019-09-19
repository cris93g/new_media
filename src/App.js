import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Nav from './Components/Nav/Nav';
class App extends Component {
	render() {
		return (
			<HashRouter>
				<Nav />
				{routes}
			</HashRouter>
		);
	}
}

export default App;
