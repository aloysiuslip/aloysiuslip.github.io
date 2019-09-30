import React from 'react';
import {Link} from 'react-router-dom';

export default class Title extends React.Component {

	render() {
		return (
			<div className="title">
				<Link to="/">
					<h1>Aloysius Lip</h1>
				</Link>
			</div>
		);
	}
}