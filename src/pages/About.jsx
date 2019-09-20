import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Social from '../common/social';

import styles from '../assets/styles/About.module.css';

import Send from '../assets/thumbnails/send.png';

export default class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div>
					<div className={styles.image}>
						<img src={Send} alt="Write to Aloysius Lip"></img>
					</div>
					<div className="form">
						<h5>
							<a href="mailto://aloysius.lip@gmail.com" rel="noopener noreferrer" target="_blank">
								aloysius.lip@gmail.com
							</a>
							<br />
							<br />
							<a href="https://goo.gl/maps/UjYAspuJgrUzLseD9" rel="noopener noreferrer" target="_blank">
								Christ Church<br />
								St Aldates<br />
								Oxford<br />
								OX1 1DP<br />
							</a>
						</h5>
					</div>
				</div>
				<Social />
			</div>
		);
	}
}