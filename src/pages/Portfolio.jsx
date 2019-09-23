import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';

import Post from '../Portfolio';
import '../assets/styles/Portfolio.css';

import config from '../assets/Portfolio.config.json';

export default class Portfolio extends React.Component {

	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className="feed">
					{config.map(p => {
						return (
							<Post
								key={p.id}
								{...p}
							/>
						)
					})}
				</div>
				<Signature />
				<Social />
			</div>
		);
	}
}
