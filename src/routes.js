import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Followers from './Views/Followers/Followers';
import SearchResults from './Components/SearchResults/SearchResults';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={SearchResults} path="/search/:words" />
		<Route component={Followers} path="/followers/:token" />
	</Switch>
);
