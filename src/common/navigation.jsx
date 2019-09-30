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
			articles: {},
			about: {}
		}
		return (
			<div className='navigation'>
				{Object.entries(pages).map(([k, v]) => {
					if ((v._aliases || []).concat([k]).some(p => (p && window.location.pathname.startsWith((process.env.PUBLIC_URL || '/') + p)) || window.location.pathname === (process.env.PUBLIC_URL || '/') + p)) v.opacity = 1.0;
					if (v._aliases) delete v._aliases;
					return (
						<Link key={'navigation.' + k} to={'/' + k} style={v}>
							<h3>{k}</h3>
						</Link>
					)
				})}
			</div>
		)
	}
}