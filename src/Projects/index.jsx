import React from 'react';
import {isEven} from '../const/util';
import '../assets/styles/Projects.css';

import ImageBox from './imageBox';
import TextBox from './textBox';

export default class Dynamic extends React.Component {

	render() {
		let element = !isEven(this.props.i) ? [
			<ImageBox
				{...this.props}
				style={{
					gridColumn: '1 / span 1'
				}}
			/>,
			<TextBox
				{...this.props}
				style={{
					gridColumn: '2 / span 2'
				}}
			/>
		] : [
			<TextBox
				{...this.props}
				style={{
					gridColumn: '1 / span 2'
				}}
			/>,
			<ImageBox
				{...this.props}
				style={{
					gridColumn: '3 / span 1'
				}}
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