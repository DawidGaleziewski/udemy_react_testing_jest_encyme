Testing for click. We use simulate enzyme method to make the click in the test:

```javascript
test('clicking on the button increments counter display', ()=> {
  const wrapper = setup()
  // Find button
  const button = findByTestAttr(wrapper, 'button')

  // Click Button
  // We use simulate method
  button.simulate('click')

  // Find display
  const count = findByTestAttr(wrapper, 'count').text()

  // Make sure display matches
  expect(count).toBe("1")

})

```