import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {

	render() {
		return (
			<div className="navigation">
				<Link to="/home">
					<h3>home</h3>
				</Link>
				<Link to="/projects">
					<h3>projects</h3>
				</Link>
				<Link to="/portfolio">
					<h3>portfolio</h3>
				</Link>
				<Link to="/articles" style={{display: "none"}}>
					<h3>articles</h3>
				</Link>
				<Link to="/about">
					<h3>about</h3>
				</Link>
			</div>
		);
	}
}