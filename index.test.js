const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns fizzBuzz on multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzBuzz');
    expect(fizzBuzz(30)).toBe('fizzBuzz');
  });
  it('returns the given number for multiples of neither 3 nor 5' , () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(22)).toBe('22');
  })
});

