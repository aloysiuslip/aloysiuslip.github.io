import React from 'react';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';
import Post from '../Projects';

import config from '../assets/Projects.config.json';

export default class Projects extends React.Component {

	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className="feed">
					{Object.entries(config).map(([section, posts], j) => {
						return (
							<React.Fragment key={section + '.' + j}>
								{
									section === 'other' ? null :
									<h2>
										{section}
									</h2>
								}
								{posts.map((p, i) => {
									return (
										<Post
											key={p.id}
											i={i}
											{...p}
										/>
									)}
								)}					
								<br />
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
