import React from 'react';
import axios from 'axios';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';
import Post from '../Portfolio';

export default class Portfolio extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	async componentDidMount() {
		try {
			let {data} = await axios.get('/portfolio.json?token=' + Math.random().toString(32).slice(2));
			this.setState({posts: data});
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
					<div className="intro">
						<h3>
							Below is a collection of artwork I've produced for various events throughout my time at school and university. It is not a complete set, since I tend to employ graphic design techniques for almost every project and presentation I undertake. Instead it is a sequence of 'collections'. My program of choice has been the GNU Image Manipulation Program (GIMP).
						</h3>
					</div>
					{this.state.posts.map(p => {
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
