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

	placeShip() {
		const carrier = new ship('Carrier', 5, 0)
    const battleships = new ship('Battleship', 4, 23)
    const destroyer = new ship('Destroyer', 3, 56)
    const submarine = new ship('Submarine', 3, 92)
    const boat = new ship('Boat', 2, 38)

  
    
		this.board.forEach((div) => {
			carrier.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
      battleships.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
      destroyer.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
      submarine.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
      boat.setCoordinates().filter((i) => {
				if (i === div.coordinates) div.class = 'chosen'
			})
		})

    return this.board
	}
}

export default gameboard
