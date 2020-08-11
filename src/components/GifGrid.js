import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	// The useEffect hook helps to execute code only in certain changes of the component
	useEffect( () => {
		getGifs();
		// If we don't provide any dependency (inside the array), the code is executed once
	}, []);

	const getGifs = async () => {
		const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=3TNlsAMoOyU8l5LsFBYtkedGH8lYHUTd';
		const res = await fetch( url );
		const { data } = await res.json();

		const gifs = data.map( img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_medium.url
			}
		})

		console.log(gifs);
		setImages( gifs );
	}

	// getGifs();

	return (
		<>
			<h3>{ category }</h3>
			{ 
				images.map( img => (
					<GifGridItem 
						key={ img.id }
						{ ...img }
					/>
				))
			}
		</>
	)
}
