import React from 'react';

export default class ImageBox extends React.Component {

	render() {
		return (
			<div
				className='imageBox project-text'
			>
				<img
					alt={this.props.id + '_image'}
					src={this.props.image}
				>
				</img>
			</div>
		)
	}
}