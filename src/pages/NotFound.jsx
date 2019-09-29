import React from 'react';
import {Link} from 'react-router-dom';

import Title from '../common/title';
import Navigation from '../common/navigation';
import Social from '../common/social';

export default class d extends React.Component {
	render() {
		return (
			<div className="container">
				<Title />
				<Navigation />
				<div className='feed'>
					<div>
						<h1>404: Not found</h1>
						<h3><Link to='/'>Return to home</Link></h3>
					</div>
				</div>
				<Social />
			</div>
		);
	}
}