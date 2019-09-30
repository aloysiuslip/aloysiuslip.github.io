import React from 'react';
import {Link} from 'react-router-dom';
import Markdown from 'react-markdown';

import '../assets/styles/Articles.css';

export default class Articles extends React.Component {

	render() {
		let obj = {}
		Object.entries(this.props).forEach(([k, {id, name, href, section, dateCreated}]) => {
			if (k === 'window') return null;
			if (!obj[section]) obj[section] = [];
			let date = new Date(dateCreated);
			if (isNaN(date.getTime())) return null;
			obj[section].push(
				<li key={id}>
					<Link to={href}>
						<h3>{<Markdown source={name} />}</h3>
						<h4>{dateCreated}</h4>
					</Link>
				</li>
			)
		});
		return (
			<div className='feed articles'>
				{Object.entries(obj).map(([k, v]) => {
					return (
						<div key={k} id={k}>
							<h1>{k}</h1>
							<ul>{v}</ul>
						</div>
					)
				})}
			</div>
		);
	}
}