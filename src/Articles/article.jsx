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
		axios(`/public/${this.props.window.match.params.section}/${value.id}.md?token=${Math.random().toString(32).slice(2)}`)
			.then(response => response.data)
			.then(body => {
				this.setState({
					data: body
				});
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
		let metadata = this.props[window.location.pathname];
		if (!metadata) return <NotFound />;
		let body = this.state.data.trim();
		if (body.endsWith('.')) body = body + ' ∎';
		let formatted = body ? <Markdown source={body} /> : null;
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className='feed'>
					<div className='article'>
						<h2>{<Markdown source={metadata.name} />}</h2>
						<h3>{metadata.dateCreated}</h3>
						{formatted}
					</div>
				</div>
				<Signature />
				<Social />
			</div>
		)
	}
}