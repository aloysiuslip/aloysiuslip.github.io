import React from 'react';
import {isEven} from '../const/util';
import '../assets/styles/Projects.css';

import TextBox from './textBox';

export default class Dynamic extends React.Component {

	render() {
		let element = [
			<div
				className='imageBox'
			>
				Hello world
			</div>,
			<TextBox
				{...this.props}
			/>
		];
		if (!isEven(this.props.i)) element = element.reverse();
		return (
			<div
				className={this.props.className}
				key={this.props.id}
			>
				{element}
			</div>
		);
	}

}