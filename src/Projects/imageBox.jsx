import React from 'react';
import path from 'path';

export default class ImageBox extends React.Component {

	render() {
		let style = Object.assign({}, {
			backgroundColor: 'black',
			backgroundImage: `url(${path.join(process.env.PUBLIC_URL, 'artwork', this.props.image)})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}, this.props.style);
		return (
			<div
				className='imageBox project-text'
				style={style}
			/>
		)
	}
}