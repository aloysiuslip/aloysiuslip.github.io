import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Articles from './pages/Articles';
import Article from './Articles/article';
import About from './pages/About';
import NotFound from './pages/NotFound';

import axios from 'axios';
import config from './assets/config.json';
axios.defaults.baseURL = config.backend;
const regex = /(?:\w|\s)+/g;

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: {}
		}
	}
	
	static getArticles() {
		return axios('/site-backend/public/index.json')
			.then(response => response.data)
			.then(body => {
				let articles = {};
				Object.entries(body.articles).map(([k, v]) => {
					articles[k] = [];
					v.forEach(({id, name, dateCreated}) => {
						let date = new Date(dateCreated);
						if (isNaN(date.getTime())) return;
						let href = `/articles/${k}/${date.getFullYear()}/${date.getMonth()}/${date.getDay()}/${name.toLowerCase().match(regex).join('').split(' ').join('-')}`;
						articles[href] = id;
					});
					return articles;
				})
				return articles;
			})
			.catch(console.error);
	}

	componentDidMount() {
		App.getArticles().then((data) => {
			this.setState({
				articles: data
			});
			this.forceUpdate();
		});
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/portfolio' exact component={Portfolio} />
					<Route path='/articles' exact component={Articles} />
					<Route path='/articles/:section/:year/:month/:date/:title' render={(props) => <Article window={props} {...this.state.articles} />} />
					<Route path='/about' exact component={About} />
					<Route path='/home' exact component={() => <Redirect to='/' />} />
					<Route path='*' component={NotFound} status={404} />
				</Switch>
			</Router>
		);
	}
}