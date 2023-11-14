import './styles/styles.css'
import gameboard from './modules/gameBoard'

const mainGame = () => {
  const gameBoard = new gameboard()
  gameBoard.placeShip()

  // for(let i = 0; i < gameBoard.board.length; i++) {
  //   const playerBoard = document.querySelector('.player1-grid')
  //   const div = document.createElement('div')
  //   div.setAttribute('data-index', div.coordinates)
  //   div.classList.add(div.class)
  //   playerBoard.appendChild(div)
  //   console.log(playerBoard)
  // }

  gameBoard.board.forEach(div => {
    const playerBoard = document.querySelector('.player1-grid')
    const d = document.createElement('div')
    d.setAttribute('data-index', div.coordinates)
    d.classList.add(div.class)
    playerBoard.appendChild(d)
  })
  // document.querySelector('dialog').showModal();
  // const playerBoard = document.querySelectorAll('.player-grid')

  // playerBoard.forEach(board => {
  //   for(let i = 0; i < 100; i++) {
  //     const div = document.createElement('div')
  //     div.setAttribute('data-index', i)
  //     board.appendChild(div)
  //   }
  // })
}


mainGame()