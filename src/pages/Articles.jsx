import React from 'react';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Signature from '../common/signature';
import Social from '../common/social';

import Feed from '../Articles';

export default class Articles extends React.Component {

	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<Feed {...this.props}/>
				<Signature />
				<Social />
			</div>
		);
	}
}