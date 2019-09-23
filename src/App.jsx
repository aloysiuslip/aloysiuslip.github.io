import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

export default class App extends React.Component {

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Route path='/' exact component={Home} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/portfolio' exact component={Portfolio} />
					<Route path='/about' exact component={About} />
					<Route path='/home' exact component={() => <Redirect to='/' />} />
				</div>
			</Router>
		);
	}
}