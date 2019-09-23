import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export function buildGrid(paths, i, id, ratios = []) {
	let arr = paths.map((name, j) => {
		let uri = [window.location.origin + process.env.PUBLIC_URL, 'gallery', id, i.toString(), name].join('/');
		if (!ratios[j]) ratios[j] = [1, 1];
		return {
			key: id + '.' + i.toString() + '.' + j.toString(),
			alt: name.toLowerCase().replace(/\s+/g, '_').replace('.jpg', ''),
			index: j,
			src: uri,
			thumbnail: uri,
			width: ratios[j][0],
			height: ratios[j][1],
			caption: name.toLowerCase()
				.replace(/\s+/g, '_')
				.replace('.jpg', '')
		}
	});
	return arr;
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
