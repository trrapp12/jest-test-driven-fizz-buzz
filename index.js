// index.js

module.exports = (num) => {
  if (num % 15 === 0) {
    return 'fizzBuzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return `${num}`
};