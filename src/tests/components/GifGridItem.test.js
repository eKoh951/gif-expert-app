import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba de componente GifGridItem', () => {
	let wrapper;

	beforeAll(() => {
		const img = {
			id: 'mAJxVnLmZcZMzhyPvO',
			title: 'One Punch Man GIF by memecandy',
			url: 'https://media1.giphy.com/media/mAJxVnLmZcZMzhyPvO/giphy.gif?cid=91b2ca0cphho7fz2liinkjwa9hugoqx2l3ka56bmxa42q50v&rid=giphy.gif'
		}
		
		wrapper = shallow(
		<GifGridItem
			key={ img.id }
			{ ...img }
		/>);
	})

	test('debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})
})