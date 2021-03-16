We can trigger update with enzyme setProps() method on the wrapper.

There is a update() method but it DOES not trigger useEffect

```javascript
describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', ()=> {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  })

  test('secretWord does not update on App update', ()=> {
    // Mock will get run on mount this is why we will need to clear it
    const wrapper = setup();
    mockGetSecretWord.mockClear()
    // Using set props as update() method does not trigger useEffect https://github.com/enzymejs/enzyme/issues/2254

    // This should not trigger after setProps
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

```