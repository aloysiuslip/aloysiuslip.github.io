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
	
	static async getArticles() {
		try {
			let {body} = axios('/public/index.json')
			let articles = {};
			Object.entries(body.articles).map(([sectionKey, v]) => {
				v.forEach((data) => {
					let {name, dateCreated} = data;
					let date = new Date(dateCreated);
					if (isNaN(date.getTime())) return;
					let year = date.getFullYear();
					let month = date.getMonth();
					let day = date.getDay();
					let urlEncoded = name.toLowerCase().match(regex).join('').split(' ').join('-');
					let section = body.keys[sectionKey];
					let href = `/articles/${sectionKey}/${year}/${month}/${day}/${urlEncoded}`;
					let key = process.env.PUBLIC_URL + href;
					articles[key] = Object.assign(data, {
						year, month, day, href, section, sectionKey
					});
				});
				return articles;
			})
			return articles;
		} catch(e) {
			console.error(e);
		}
	}

	async componentDidMount() {
		let articles = await App.getArticles()
		this.setState({articles});
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/articles' render={() => <Articles {...this.state.articles} />} />
					<Route exact path='/articles/:section/:year/:month/:date/:title' render={(props) => <Article window={props} {...this.state.articles} />} />
					<Route exact path='/about' component={About} />
					<Route exact path='/home' component={() => <Redirect to='/' />} />
					<Route path='*' component={NotFound} status={404} />
				</Switch>
			</Router>
		);
	}
}