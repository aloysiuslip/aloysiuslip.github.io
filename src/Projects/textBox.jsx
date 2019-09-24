import React from 'react';
import {isEven} from '../const/util';
import {github, npm, devpost} from '../const/social';
import thumbs from '../const/thumbnails';

export default class TextBox extends React.Component {

	render() {
		return (
			<div
				className='textBox project-text'
				style={Object.assign(this.props.style, {
					backgroundColor: this.props.colour || '#002147'
				})}
			>
				<div className='links prefix'>
					{(this.props.dependencies || []).map(key => key in thumbs ?
						<a href={thumbs[key].uri} rel="noopener noreferrer" target="_blank">
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
							else return <span className='bold'>{element}</span> 
						})
					: this.props.title}
				</h1>
				<h4 className='description'>
					{this.props.description}
				</h4>
				{
					(Object.entries(this.props.status || {})).map(([k, v]) => {
						return (
							<h4 className='status'>{k === 'status' ? v : k + ': ' + v}</h4>
						)
					})
				}
				<div className='links suffix'>
					{this.props.github ? <a href={this.props.github}><img alt='github_logo' src={github} rel="noopener noreferrer" target="_blank"></img></a> : null}
					{this.props.npm ? <a href={this.props.npm}><img alt='npm_logo' src={npm} rel="noopener noreferrer" target="_blank"></img></a> : null}
					{this.props.devpost ? <a href={this.props.devpost}><img alt='devpost_logo' src={devpost} rel="noopener noreferrer" target="_blank"></img></a> : null}
				</div>
			</div>
		)
	}
}