import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';

export default class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />

				<Signature />
				<Social />
			</div>
		);
	}
}
