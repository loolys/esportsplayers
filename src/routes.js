"use strict";
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout';
import IndexPage from './components/indexPage';
import PlayerPage from './components/playerPage';
import NotFoundPage from './components/notFoundPage';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={IndexPage} />
		<Route path="player/:id" component={PlayerPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
