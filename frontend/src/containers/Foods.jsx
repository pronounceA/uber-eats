import { useEffect } from 'react';

import { fetchFoods } from '../apis/foods';

export const Foods = ({ match }) => {

	useEffect(() => {
		fetchFoods(match.params.restaurantsId)
		.then((data) =>
			console.log(data))
	}, [])

	return (
		<>
			フード一覧
		</>
	)
}