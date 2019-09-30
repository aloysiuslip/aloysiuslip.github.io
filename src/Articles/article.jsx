import React from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';
import NotFound from '../pages/NotFound';

import '../assets/styles/Articles.css';

import config from '../assets/config.json';
const pathname = `${config.backend}/site-backend/public/|/|.md`;

export default class Article extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: ''
		}
	}

	componentDidUpdate() {
		if (this.state.data) return;
		let value = this.props[window.location.pathname];
		if (!value) return;
		let url = pathname.replace('|', this.props.window.match.params.section).replace('|', value);
		let constructor = this;
		axios.get(url)
			.then(response => response.data)
			.then(body => {
				constructor.setState({
					data: body
				});
				this.forceUpdate();
			})
	}

	render() {
		if (!this.props[window.location.pathname]) return <NotFound />;
		let body = this.state.data ? <Markdown source={this.state.data} className='article'/> : null;
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className='feed'>
					{body}
				</div>
				<Signature />
				<Social />
			</div>
		)
	}
}