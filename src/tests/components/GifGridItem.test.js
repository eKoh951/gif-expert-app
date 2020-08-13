import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba de componente GifGridItem', () => {
	let wrapper;
	const img = {
		id: 'mAJxVnLmZcZMzhyPvO',
		title: 'One Punch Man GIF by memecandy',
		url: 'https://media1.giphy.com/media/mAJxVnLmZcZMzhyPvO/giphy.gif?cid=91b2ca0cphho7fz2liinkjwa9hugoqx2l3ka56bmxa42q50v&rid=giphy.gif'
	}

	beforeAll(() => {
		wrapper = shallow(
		<GifGridItem
			key={ img.id }
			{ ...img }
		/>);
	})

	test('debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('debe de tener un parrafo con el title', () => {
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe( img.title );
	})

	test('debe de tener una imagen con src y alt de los props', () => {
		const image = wrapper.find('img');
		// console.log( image.props() );
		expect( image.prop('src') ).toBe( img.url );
		expect( image.prop('alt') ).toBe( img.title );
	})
	
	test('debe de tener animate__fadeIn', () => {
		const div = wrapper.find('div');
		expect( div.prop('className') ).toContain( 'animate__fadeIn' );
	})
	
	
})