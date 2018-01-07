const sum = require('./sum');
test('2개의 합', () => {
  expect(sum(1, 2)).toBe(3);
});