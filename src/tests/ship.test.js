import ship from '../modules/ship.js'

test('SHIP CLASS EXISTSS', () => {
  expect(new ship('Carrier')).not.toBe(null)
})

test('CHECK LENGTH', () => {
  expect(new ship('Carrier', 5).getLength()).not.toBe(undefined)
})

test('Output exact length', () => {
  expect(new ship('Carrier', 5).getLength()).toBe(5)
})

test('hits', () => {
  expect(new ship('Carrier', 5).checkHits()).not.toBe(undefined)
})

test('sunk', () => {
  expect(new ship('Carrier', 5).isSunk()).not.toBe(undefined)
})