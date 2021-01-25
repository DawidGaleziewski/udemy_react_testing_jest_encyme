# Shallow testing
we want to import shallow from enzyme library.
Shallow is a function that returns a wrapper (dom representation)

```javascript

test('renders without crashing', () => {
    const wrapper = shallow(<App />)
    // Enzyme allows us to do assertion tests that check some conditions
    expect(wrapper).toBeTruthy();

    // we should not trust tests that we never saw failing:
    expect(wrapper).toBeFalsy()
}
```
