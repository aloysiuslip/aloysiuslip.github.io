import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Route path={(process.env.PUBLIC_url || '') + '/'} exact component={Home} />
					<Route path={(process.env.PUBLIC_url || '') + '/projects'} exact component={Home} />
					<Route path={(process.env.PUBLIC_url || '') + '/portfolio'} exact component={Portfolio} />
					<Route path={(process.env.PUBLIC_url || '') + '/about'} exact component={About} />
					<Route path={(process.env.PUBLIC_url || '') + '/home'} exact component={() => <Redirect to='/' />} />
				</div>
			</Router>
		);
	}
}