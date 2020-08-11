import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	// setCategories(categories.concat('Kanojo')); //No es conveniente pues no asigna una Key al componente
	// 	setCategories(['Kanojo', ...categories]);
	// 	console.log(categories);
	// }

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories } />
			<hr />


			<ol>
			{
				categories.map((category) => (
					<GifGrid
						category={ category }
						key={ category }
					/>
				))
			}
 			</ol>
		</>
	);
}

export default GifExpertApp;