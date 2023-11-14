import './styles/styles.css'

const mainGame = () => {
  // document.querySelector('dialog').showModal();
  const playerBoard = document.querySelectorAll('.player-grid')

  playerBoard.forEach(board => {
    for(let i = 0; i < 100; i++) {
      const div = document.createElement('div')
      board.appendChild(div)
    }
  })
}


mainGame()