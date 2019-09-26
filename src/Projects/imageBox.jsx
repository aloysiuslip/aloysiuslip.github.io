import React from 'react';

export default class ImageBox extends React.Component {

	render() {
		let style = Object.assign({}, {
			backgroundColor: 'black',
			backgroundImage: `url(/artwork/${this.props.image})`,
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