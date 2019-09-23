import React, { useState, useCallback } from "react";
import path from 'path';
import { Carousel as Gallery } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel, { Modal, ModalGateway } from "react-images";

export function buildCarousel(paths, i, id) {
	return paths.map(name => {
		return (
			<div key={id + '.' + i.toString()}>
				<img
					alt={name.toLowerCase().replace(/\s+/g, '_').replace('.jpg', '')}
					src={path.join(process.env.PUBLIC_URL, 'gallery', id, i.toString(), name)}
				></img>
			</div>
		);
	});
}

function App(props) {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<div
			className="Grid"			
			key={props.id + '.' + props.i.toString() + '.Grid' + Math.random().toString(32).slice(2)}
		>
			<Gallery
				{...props}
				onClick={props.enableLightbox !== false ? openLightbox : () => {}}
			/>
			{props.enableLightbox !== false ? (
				<ModalGateway
					key={props.id + '.' + props.i.toString() + '.Gateway'}
				>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={props.photos.map(x => ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			) : null}
		</div>
	);
}

export default App;
