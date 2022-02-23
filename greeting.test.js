const choice = preference => {` I like ${preference} toilet paper!`};

describe('choice()' , () => {
  it('says what they like', () => {
    expect(choice('sandpaper')).toBe("I like sandpaper toilet paper!")
  })
})