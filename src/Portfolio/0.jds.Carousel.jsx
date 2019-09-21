import React from "react";
import { Carousel } from "react-responsive-carousel";

export default class Horizontal extends React.Component {

	render() {
		let children = this.buildCarousel();
		return <Carousel className="Carousel"
			autoPlay
			width="100%"
			infiniteLoop
			showStatus={false}
			interval={4000}
			transitionTime={500}
			useKeyboardArrows
		>
			{children}
		</Carousel>;
	}

	buildCarousel() {
		const jds_1 = [
			'Debating is Great.jpg',
			'Speech is Great.jpg',
			'Training is Great.jpg',
			'Pace is Great.jpg',
			'Coherence is Great.jpg',
			'Independence is Great.jpg',
			'Interjection is Great.jpg',
			'Organization is Great.jpg',
			'Tradition is Great.jpg',
			'Ed Stone.jpg',
			'We can\'t go on like this.jpg'
		];
		let arr = [];
		for (let name of jds_1) {
			arr.push([
				<div>
					<img alt={name.toLowerCase()
						.replace(/\s+/g, '_')
						.replace('.jpg', '')
					} src={'/gallery/0.jds/1/' + name}></img>
				</div>
			])
		}
		return arr;
	}
}