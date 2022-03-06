const preference = require('./preference')


describe('preference()' , () => {
  it('says what they like', () => {
    expect(preference('gritty')).toBe("I like gritty toilet paper!")
  })
})