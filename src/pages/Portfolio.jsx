import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';

import Post from '../Portfolio';
import style from '../assets/styles/Post.module.css';

import config from '../assets/Portfolio.config.json';

export default class Portfolio extends React.Component {

	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className="intro">
					<h3>
						Below is a collection of artwork I've produced for various events throughout my time at school and university. It is not a complete set, since I tend to employ graphic design techniques for almost every project and presentation I undertake. Instead it is a sequence of 'collections'. My program of choice has been the GNU Image Manipulation Program (GIMP).
					</h3>
				</div>
				<div className="feed">
					{config.map(p => {
						return (
							<Post
								className={style.portfolio}
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
