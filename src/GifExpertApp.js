import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

	// const handleAdd = () => {
	// 	// setCategories(categories.concat('Kanojo')); //No es conveniente pues no asigna una Key al componente
	// 	setCategories(['Kanojo', ...categories]);
	// 	console.log(categories);
	// }

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory />
			<hr />


			<ol>
			{
				categories.map((category) => {
					return <li key={category}>{category}</li>
				})
			}
 			</ol>
		</>
	);
}

export default GifExpertApp;