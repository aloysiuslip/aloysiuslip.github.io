import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import path from 'path';

import config from '../assets/Portfolio.config.json';

let arr = [];

class Dynamic extends React.Component {

	constructor(props) {
		super(props);
		/*eslint-disable-next-line no-unused-vars*/
		for (let k of Object.getOwnPropertyNames(props)) {
			this[k] = props[k];
		}
		this.getCarousel = this.getCarousel.bind(this);
		if (!this.galleries) this.galleries = [];
	}
	
	render() {
		let element = (
			<div className="post" key={this.id}>
				<h1>{this.title}</h1>
				<h2>{this.subtitle}</h2>
				{this.body}
				{this.galleries.map((gallery, i) => this.getCarousel(gallery, i, this.id))}
			</div>
		);
		return element;
	}

	getCarousel(gallery, i, id) {
		if (gallery.type !== 'carousel') return null;
		let children = this.buildCarousel(gallery.paths, i, id);
		return <Carousel className="Carousel"
			id={id + '.' + i.toString() + '.Carousel'}
			autoPlay
			width={gallery.width || "100%"}
			infiniteLoop
			showStatus={false}
			showThumbs={gallery.showThumbs !== false}
			interval={4000}
			transitionTime={500}
			useKeyboardArrows
			centerMode={gallery.centerMode || false}
		>
			{children}
		</Carousel>;
	}

	buildCarousel(paths, i, id) {
		return paths.map(name => {
			return <div key={id + '.' + i.toString()}>
				<img alt={name.toLowerCase()
					.replace(/\s+/g, '_')
					.replace('.jpg', '')
				} src={path.join(process.env.PUBLIC_URL, 'gallery', id, i.toString(), name)}></img>
			</div>
		});
	}

}

/*eslint-disable-next-line no-unused-vars*/
for (let post of config.sort((a, b) => new Date(b.date) - new Date(a.date))) {
	let Constructor = new Dynamic(post);
	let element = Constructor.render();
	arr.push(element);
}

export default arr;