import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	// The useEffect hook helps to execute code only in certain changes of the component
	useEffect( () => {
		getGifs( category )
			// .then( imgs => setImages( imgs ));
			.then( setImages );
		// If we don't provide any dependency (inside the array), the code is executed once
	}, [ category ]);

	// getGifs();

	return (
		<div className="card-grid">
			<h3>{ category }</h3>
			{
				images.map( img => (
					<GifGridItem 
						key={ img.id }
						{ ...img }
					/>
				))
			}
		</div>
	)
}
