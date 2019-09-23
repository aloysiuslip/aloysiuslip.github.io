import React from 'react';
import path from 'path';
import Grid, {buildGrid} from './Grid';
import Carousel, {buildCarousel} from './Carousel';

export default class Dynamic extends React.Component {

	static toProperCase(str) {
		let words = str.split(/ +/g);
		let newArray = [];
		for (let i = 0; i < words.length; i++) {
			newArray[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
		}
		let newString = newArray.join(' ');
		return newString;
	}

	getImage(gallery, i, id) {
		return (
			<div
				className="DisplayImage"			
				key={id + '.' + i.toString() + '.Image'}
			>
				<img 
					alt={gallery.path.toLowerCase().replace(/\s+/g, '_').replace('.jpg', '')}
					src={path.join(process.env.PUBLIC_URL, 'gallery', id, i.toString(), gallery.path)}
					style={Object.assign({}, gallery, {
						type: undefined,
						path: undefined
					})}
				></img>
			</div>
		)
	}

	getGrid(gallery, i, id) {
		let children = buildGrid(gallery.paths, i, id, gallery.ratios);
		let element = (
			<Grid
				key={id + '.' + i.toString() + '.Grid'}
				i={i}
				id={id}
				photos={children}
				margin={gallery.margin || 2}
				rowHeight={gallery.rowHeight || 180}
				enableLightbox={gallery.enableLightbox !== false}
				columns={3}
			/>
		);
		return element;
	}

	getCarousel(gallery, i, id) {
		let children = buildCarousel(gallery.paths, i, id);
		return (
			<Carousel
				className="Carousel"
				key={id + '.' + i.toString() + '.Carousel'}
				i={i}
				id={id}
				infiniteLoop={true}
				useKeyboardArrows={true}
				showStatus={false}
				emulateTouch={true}
				axis={gallery.axis || "horizontal"}
				autoPlay={gallery.autoPlay !== false}
				width={gallery.width || "100%"}
				selectedItem={gallery.selectItem || 0}
				showThumbs={gallery.showThumbs !== false}
				interval={gallery.interval || 4000}
				transitionTime={gallery.transitionTime || 500}
				centerMode={gallery.centerMode || false}
				dynamicHeight={gallery.dynamicHeight || false}
			>
				{children}
			</Carousel>
		);
	}

	render() {
		let element = (
			<div className="post" key={this.props.id}>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				{this.props.body}
				{(this.props.galleries || []).map((gallery, i) => {
					try {
						if (!gallery.type) throw new Error('No type specified for gallery ' + gallery.id);
						let func = 'get' + Dynamic.toProperCase(gallery.type);
						return this[func](gallery, i, this.props.id);
					} catch (e) {
						if (e) console.error(e);
						return null;
					}
				})}
			</div>
		);
		return element;
	}

}