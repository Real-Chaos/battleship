import ship from '../modules/ship.js'

test('SHIP CLASS EXISTSS', () => {
  expect(new ship('Carrier')).not.toBe(null)
})