const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns fizzBuzz on multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzBuzz');
    expect(fizzBuzz(30)).toBe('fizzBuzz');
  });
});