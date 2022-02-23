const greeting = term => `WTF is ${term}!!!`;

describe('greeting()', () => {
  it('swears at your stupidity', () => {
    expect(greeting('marshmallow')).toBe('WTF is marshmallow!!!')
  })
} )