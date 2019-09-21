import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';

import Posts from '../Portfolio';
import '../assets/styles/Portfolio.css';

export default class Portfolio extends React.Component {

	render() {
		return (
			<div className="container">
				<link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
				<Title />
				<Navigation />
				<div className="feed">
					{Posts.map(p => {
						return (
						<React.Fragment key={p.key}>
							{p}
						</React.Fragment>
						)
					})}
				</div>
				<Signature />
				<Social />
			</div>
		);
	}
}
