import React from 'react';
import {isEven} from '../const/util';
import '../assets/styles/Projects.css';

import ImageBox from './imageBox';
import TextBox from './textBox';

export default class Dynamic extends React.Component {

	render() {
		let props = Object.assign({}, this.props, {
			key: this.props.id + '.' + this.state + '.ImageBox'
		});
		let element = !isEven(this.props.i) && window.innerWidth > 480 ? [
			<ImageBox
				{...props}
				style={Object.assign({}, props.style)}
			/>,
			<TextBox
				key={this.props.id + '.' + this.props.i + '.TextBox'}
				{...this.props}
			/>
		] : [
			<TextBox
				key={this.props.id + '.' + this.props.i + '.TextBox'}
				{...this.props}
			/>,
			<ImageBox
				{...props}
				style={Object.assign({}, props.style)}
			/>
		];
		return (
			<div
				className='post projects-text'
				key={this.props.id}
			>
				{element}
			</div>
		);
	}

}