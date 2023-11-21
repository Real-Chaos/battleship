import './styles/styles.css'
import gameboard from './modules/gameBoard'
import ship from './modules/ship'

const mainGame = () => {
	// gameBoard.placeShip()

	// for(let i = 0; i < gameBoard.board.length; i++) {
	//   const playerBoard = document.querySelector('.player1-grid')
	//   const div = document.createElement('div')
	//   div.setAttribute('data-index', div.coordinates)
	//   div.classList.add(div.class)
	//   playerBoard.appendChild(div)
	//   console.log(playerBoard)
	// }
	const gameBoardX = new gameboard()
		

	document.querySelector('dialog').showModal()
	
	const playerBoard = document.querySelector('.modal-grid')

	for (let i = 0; i < 100; i++) {
		const div = document.createElement('div')
		div.setAttribute('data-index', i)
		playerBoard.appendChild(div)
	}

	const div = document.querySelectorAll('.modal-grid div')
	const shipChosen = document.querySelector('.carrier-ship')
	let shipX = document.querySelectorAll('.carrier-ship .box')

	const carrier = document.querySelector('.carrier-ship')
	const battleship = document.querySelector('.battle-ship')
	const destroyer = document.querySelector('.destroyer-ship')
	const submarine = document.querySelector('.submarine-ship')
	const boat = document.querySelector('.boat-ship')

	carrier.addEventListener(
		'drag',
		() => (shipX = document.querySelectorAll('.carrier-ship .box'))
	)
	battleship.addEventListener(
		'drag',
		() => (shipX = document.querySelectorAll('.battle-ship .box'))
	)
	destroyer.addEventListener(
		'drag',
		() => (shipX = document.querySelectorAll('.destroyer-ship .box'))
	)
	submarine.addEventListener(
		'drag',
		() => (shipX = document.querySelectorAll('.submarine-ship .box'))
	)
	boat.addEventListener(
		'drag',
		() => (shipX = document.querySelectorAll('.boat-ship .box'))
	)

	div.forEach((d) => {
		d.addEventListener('dragover', (e) => {
			e.preventDefault()
		})

		d.addEventListener('drop', (e) => {
			const chosenBox = Number(e.target.getAttribute('data-index'))
			for (let i = 0; i < shipX.length; i++) {
				div[Number(chosenBox + i)].setAttribute(
					'ship',
					shipX[i].parentElement.classList[0]
				)
				div[Number(chosenBox + i)].appendChild(shipX[i])
			}
			shipX = ''
		})
	})

	document.querySelector('.play-btn').addEventListener('click', () => {
		
		document.querySelector('dialog').close()
		let c, b, de, s, bo
		div.forEach((d) => {
			if (d.getAttribute('ship') === 'carrier-ship')
				c = Number(d.getAttribute('data-index')) - 4
			else if (d.getAttribute('ship') === 'battle-ship')
				b = Number(d.getAttribute('data-index')) - 3
			else if (d.getAttribute('ship') === 'destroyer-ship')
				de = Number(d.getAttribute('data-index')) - 3
			else if (d.getAttribute('ship') === 'submarine-ship')
				s = Number(d.getAttribute('data-index')) - 2
			else if (d.getAttribute('ship') === 'boat-ship')
				bo = Number(d.getAttribute('data-index')) - 1
		})
		
		gameBoardX.placeShip(c, b, de, s, bo)
		gameBoardX.board.forEach((div) => {
			const playerBoard = document.querySelector('.player1-grid')
			const d = document.createElement('div')
			d.setAttribute('data-index', div.coordinates)
			d.classList.add(div.class)
			playerBoard.appendChild(d)
		})
		
		
	})
}

mainGame()
