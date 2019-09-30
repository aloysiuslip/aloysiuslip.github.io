import React from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';
import NotFound from '../pages/NotFound';

import '../assets/styles/Articles.css';
export default class Article extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: ''
		}
	}

	getArticle() {
		let value = this.props[window.location.pathname];
		if (!value) return;
		axios.get('/site-backend/public/|/|.md'.replace('|', this.props.window.match.params.section).replace('|', value))
			.then(response => response.data)
			.then(body => {
				this.setState({
					data: body
				});
				this.forceUpdate();
			})
	}

	componentDidMount() {
		if (this.state.data) return;
		this.getArticle();
	}

	componentDidUpdate() {
		if (this.state.data) return;
		this.getArticle();
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