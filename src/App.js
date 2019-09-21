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
					<Route path={(process.env.PUBLIC_URL || '') + '/'} exact component={Home} />
					<Route path={(process.env.PUBLIC_URL || '') + '/projects'} exact component={Home} />
					<Route path={(process.env.PUBLIC_URL || '') + '/portfolio'} exact component={Portfolio} />
					<Route path={(process.env.PUBLIC_URL || '') + '/about'} exact component={About} />
					<Route path={(process.env.PUBLIC_URL || '') + '/home'} exact component={() => <Redirect to='/' />} />
				</div>
			</Router>
		);
	}
}