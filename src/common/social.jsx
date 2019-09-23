import React from 'react';

import {github, npm, devpost, linkedin, facebook, instagram, email} from '../const/social';

export default class Footer extends React.Component {

	render() {
		return (
			<div className="social">
				<div>
					<a href="https://github.com/theLAZYmd">
						<img src={github} alt="github"></img>
					</a>
					<a href="https://www.npmjs.com/~lazycst">
						<img src={npm} alt="npm"></img>
					</a>
					<a href="https://devpost.com/lazyst">						
						<img src={devpost} alt="devpost"></img>
					</a>
				</div>
				<div>
					<a href="https://linkedin.com/in/aloysiuslip">						
						<img src={linkedin} alt="linkedin"></img>
					</a>
					<a href="https://facebook.com/aloysius.lip">						
						<img src={facebook} alt="facebook"></img>
					</a>
					<a href="https://instagram.com/lazy.st">						
						<img src={instagram} alt="instagram"></img>
					</a>
					<a href="mailto://aloysius.lip@gmail.com">						
						<img src={email} alt="email"></img>
					</a>
				</div>
			</div>
		)
	}
}