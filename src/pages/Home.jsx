import React from 'react';
import {Link} from 'react-router-dom';
import path from 'path';

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
				<br />
				<div className='feed'>
					<div className='stager'>
						<div className='imageBox'>
							<img alt='Oxford_Hack' src={path.join(process.env.PUBLIC_URL, 'artwork', 'oxhack.jpg')}/>
						</div>
						<div className='infoBox'>
							<div>
								<h1>Oxford Hack 2018</h1>
								<h4>An international coding competition inviting students from pre-University to DPhil. Leader of the team 'ParliaMate', overall competition winners and winners of the 'Deloitte API Prize' and the 'Google Cloud Compute Challenge'</h4>
								<div><Link to='/projects'>PROJECT</Link></div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<Signature />
				<Social />
			</div>
		);
	}
}
