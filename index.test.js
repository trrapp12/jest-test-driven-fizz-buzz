const fizzBuzz = require('/index');

describe('fizzbuzz()' , () => {
  it('returns "Fizzbuzz" for multiples of 3 and 5' , () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })
})