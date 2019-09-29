import React from 'react';
import axios from 'axios';

import {italicise} from '../const/util';

import '../assets/styles/Articles.css'

import config from '../assets/config.json';
const index = `${config.backend}/site-backend/public/index.json`;
const regex = /(?:\w|\s)+/g;

export default class Articles extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			keys: {},
			articles: {},
			paths: []
		}
	}

	static get() {
		return axios({
			method: 'get',
			url: index
		})
			.then(response => response.data)
			.then(body => {
				let keys = body.keys;
				let articles = {};
				let paths = [];
				Object.entries(body.articles).map(([k, v]) => {
					articles[k] = [];
					v.forEach(({id, name, dateCreated}) => {
						let date = new Date(dateCreated);
						if (isNaN(date.getTime())) return;
						let href = `/articles/${k}/${date.getFullYear()}/${date.getMonth()}/${date.getDay()}/${name.toLowerCase().match(regex).join('').split(' ').join('-')}`;
						let data = {id, name, dateCreated, date, href};
						paths.push(data);
						articles[k].push(data);
					});
					return articles;
				})
				return {keys, articles, paths}
			})
			.catch(console.error);
	}

	componentDidMount() {
		Articles.get().then((data) => {
			this.setState(data);
		});
	}

	render() {
		return (
			<div className='feed articles'>
				{Object.entries(this.state.keys).map(([k, section]) => {
					let v = this.state.articles[k] || [];
					return (
						<div key={k} id={k}>
							<h1>{section}</h1>
							<ul>
							{v.map(({id, name, dateCreated, href}) => {
								let date = new Date(dateCreated);
								if (isNaN(date.getTime())) return null;
								return (
									<li key={id}>
										<a href={href}>
											<h3>{italicise(name)}</h3>
											<h4>{dateCreated}</h4>
										</a>
									</li>
								)
							})}
							</ul>
						</div>
					)
				})}
			</div>
		);
	}
}