import gameboard from "../modules/gameBoard";

test('check gameboard exists', () => {
  expect(new gameboard()).not.toBe(null)
})



test('check board children', () => {
  expect(new gameboard(0, 5).createBoard).not.toBe(undefined)
})

test('check board cordinates', () => {
  expect(new gameboard(0, 5).placeShip()).toBe("ship placed at 0 - 5")
})