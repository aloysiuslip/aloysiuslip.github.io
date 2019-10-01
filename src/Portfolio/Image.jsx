import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import path from 'path';

export function buildImage(gallery, i, id) {
	return {
		key: id + '.' + i.toString() + '.Image',
		i,
		id,
		alt: gallery.path.toLowerCase().replace(/\s+/g, '_').replace('.jpg', ''),
		src: path.join(process.env.PUBLIC_URL, 'gallery', id, i.toString(), gallery.path),
		style: Object.assign({}, gallery, {
			type: undefined,
			path: undefined
		}, window.innerWidth < 480 ? {minWidth: '100%'} : null),
		index: 0
	}
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
			className="DisplayImage"			
			key={props.id + '.' + props.i.toString() + '.Image' + Math.random().toString(32).slice(2)}

		>
			<img
				{...props}
				alt={props.alt}
				onClick={() => openLightbox('click', props)}
			/>
			{props.enableLightbox !== false ? (
				<ModalGateway
					key={props.id + '.' + props.i.toString() + '.Gateway'}
				>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={[props].map(x => {
									return ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								})})}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			) : null}
		</div>
	);
}

export default App;