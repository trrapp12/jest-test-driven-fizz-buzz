// module.exports = (num) => `${num}`;

module.exports = (num) => {
  if (num % 15 === 0) return 'FizzBuzz';
  return `${num}`
}