import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

	const [count, setCount] = useState(0);

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
	}

	// getGifs();

	return (
		<>
			<h3>{ category }</h3>
			<button onClick={ () => setCount(count + 1 ) }/>
			<h3>{ count }</h3>
		</>
	)
}
