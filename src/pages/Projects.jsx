import React from 'react';
import axios from 'axios';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';
import Post from '../Projects';

export default class Projects extends React.Component {	

	constructor(props) {
		super(props);
		this.state = {
			sections: {}
		}
	}

	async componentDidMount() {
		try {
			let {data} = await axios.get('/projects.json?token=' + Math.random().toString(32).slice(2));
			this.setState({sections: data});
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className="feed">
					{Object.entries(this.state.sections).map(([section, posts], j) => {
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
