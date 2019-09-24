import React from 'react';

export default class ImageBox extends React.Component {

	render() {
		return (
			<div
				className='imageBox project-text'
				style={Object.assign(this.props.style, {
					backgroundColor: 'black',
					backgroundImage: `url(/artwork/${this.props.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				})}
			/>
		)
	}
}