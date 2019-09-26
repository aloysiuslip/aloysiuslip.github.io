import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {

	render() {
		const pages = {
			home: {
				_aliases: ['']
			},
			projects: {},
			portfolio: {},
			articles: {
				display: 'none'
			},
			about: {}
		}
		return (
			<div className='navigation'>
				{Object.entries(pages).map(([k, v]) => {
					if ((v._aliases || []).concat([k]).some(p => window.location.pathname === '/' + p)) v.opacity = 1.0;
					if (v._aliases) delete v._aliases;
					return (
						<Link to={'/' + k} style={v}>
							<h3>{k}</h3>
						</Link>
					)
				})}
			</div>
		)
	}
}