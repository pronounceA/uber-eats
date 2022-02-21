export const Foods = ({
	match
}) => {
	return (
		<>
			フード一覧
			<p>
				restaurantIdは {match.params.restaurantsId} です
			</p>
		</>
	)
}