import React from 'react';
import {isEven} from '../const/util';
import {github, npm, devpost} from '../const/social';
import thumbs from '../const/thumbnails';

const social = Object.assign({}, {github, npm, devpost});
const validLinkRegex = /^(github|npm|devpost)/;

export default class TextBox extends React.Component {

	generateLinks(entries) {
		return entries.map(([_k, v], i) => {
			if (!validLinkRegex.test(_k)) return null;
			let [, k] = _k.match(validLinkRegex);
			return (
				<a
					key={this.props.id + '.' + this.props.i + '.TextBox.a.' + i}
					id={_k}
					href={v}
					rel="noopener noreferrer"
					target="_blank" 
				>
					<img alt={_k + '_logo'} src={social[k]}/>
				</a>
			);
		});
	}

	render() {
		return (
			<div
				className='textBox project-text'
				style={Object.assign({}, this.props.style, {
					backgroundColor: this.props.colour || '#002147'
				})}
			>
				<div className='links prefix'>
					{(this.props.dependencies || []).map(key => key in thumbs ?
						<a key={this.props.id + '.' + key} href={thumbs[key].uri} rel="noopener noreferrer" target="_blank">
							<img
								alt={thumbs[key].alt}
								src={thumbs[key].src}
								style={thumbs[key].style}
							></img>
						</a>
					: null)}
				</div>
				<h1>
					{this.props.title.includes('**') ?
						this.props.title.split('**').map((element, i) => {
							if (isEven(i)) return element;
							else return <span key={element + '.' + i} className='bold'>{element}</span> 
						})
					: this.props.title}
				</h1>
				<h4 className='description'>
					{this.props.description}
				</h4>
				{
					(Object.entries(this.props.status || {})).map(([k, v]) => {
						return (
							<h4 key={this.props.id + '.description.' + k} className='status'>{k === 'status' ? v : k + ': ' + v}</h4>
						)
					})
				}
				<div className='links suffix'>
					{this.generateLinks(Object.entries(this.props))}
				</div>
			</div>
		)
	}
}