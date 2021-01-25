# test refactor:

Original:
```javascript
test('app component renders without error', () => {
  const wrapper = shallow(<App/>)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});


test("render button", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find("[data-test='button']")
  expect(button.length).toBe(1)
})


test("render counter display", () => {
  const wrapper = shallow(<App />)
  const counter = wrapper.find("[data-test='counter']")
  expect(counter.length).toBe(1)
})

```

 Refactor:
```javascript
/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 */
const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('app component renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test("render button", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'button')
  expect(button.length).toBe(1)
})

test("render counter display", () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'counter')
  expect(counter.length).toBe(1)
})

```

We do not want to refactor our code to much to be DRY. Despite the fact much repeats here we want it to be easy for us to check the test and see what is going on

We also do not want to put all assertion tests into one test method

It is good to have one test per expect statment