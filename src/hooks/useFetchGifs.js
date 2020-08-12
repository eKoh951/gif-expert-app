import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

		// The useEffect hook helps to execute code only in certain changes of the component
	useEffect( () => {
		getGifs( category )
			.then( imgs => {
				
				setState({
					data: imgs,
					loading: false
				})

			});
	}, [category])

	return state; // { data: [], loading: true }
}