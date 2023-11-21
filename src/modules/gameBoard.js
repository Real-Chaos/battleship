import ship from './ship'
class gameboard {
	constructor() {
		this.board = this.createBoard()
	}

	createBoard() {
		const board = []
		for (let i = 0; i < 100; i++) {
			const div = {
				class: 'empty',
				coordinates: `${i}, 100`,
			}
			board.push(div)
		}
		return board
	}

	placeShip(c, b, d, s, bo) {
		const carrier = new ship('Carrier', 5, c)
		const battleships = new ship('Battleship', 4, b)
		const destroyer = new ship('Destroyer', 3, d)
		const submarine = new ship('Submarine', 3, s)
		const boat = new ship('Boat', 2, bo)

		this.board.forEach((div) => {
			// if (10 - carrier.start >= carrier.length) {
			// 	carrier.setCoordinates().filter((i) => {
			// 		if (i === div.coordinates) div.class = 'chosen'
			// 	})
			// }
			carrier.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
			battleships.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
			// if (10 - Number(battleships.start.toString()[1]) >= battleships.length) {
			// 	battleships.setCoordinates().filter((i) => {
			// 		if (i === div.coordinates) div.class = 'chosen'
			// 	})
			// }
			// if (10 - destroyer.start.toString()[1] >= destroyer.length) {
			// 	destroyer.setCoordinates().filter((i) => {
			// 		if (i === div.coordinates) div.class = 'chosen'
			// 	})
			// }
			destroyer.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
			// if (10 - submarine.start.toString()[1] >= submarine.length) {
			// 	submarine.setCoordinates().filter((i) => {
			// 		if (i === div.coordinates) div.class = 'chosen'
			// 	})
			// }
			submarine.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
			// if (10 - boat.start.toString()[1] >= boat.length) {
			// 	boat.setCoordinates().filter((i) => {
			// 		if (i === div.coordinates) div.class = 'chosen'
			// 	})
			// }
			boat.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
		})

		return this.board
	}
}

export default gameboard
