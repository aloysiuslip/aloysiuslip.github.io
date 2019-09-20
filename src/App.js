import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Route path='/' exact component={Home} />
					<Route path='/home' exact component={() => <Redirect to='/' />} />
				</div>
			</Router>
		);
	}
}