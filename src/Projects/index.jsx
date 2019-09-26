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
		let element = isEven(this.props.i) ? [
			<ImageBox
				{...props}
				style={Object.assign({}, props.style, {
					gridColumn: '1 / span 1'
				})}
			/>,
			<TextBox
				key={this.props.id + '.' + this.props.i + '.TextBox'}
				{...this.props}
				style={{
					gridColumn: '2 / span 2'
				}}
			/>
		] : [
			<TextBox
				key={this.props.id + '.' + this.props.i + '.TextBox'}
				{...this.props}
				style={{
					gridColumn: '1 / span 2'
				}}
			/>,
			<ImageBox
				{...props}
				style={Object.assign({}, props.style, {
					gridColumn: '3 / span 1'
				})}
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