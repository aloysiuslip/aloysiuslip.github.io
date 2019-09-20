import React from 'react';
import Title from '../common/title';
import Navigation from '../common/navigation';
import Footer from '../common/footer';

export default class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<Footer />
			</div>
		);
	}
}
