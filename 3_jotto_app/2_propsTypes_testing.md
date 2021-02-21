propTypes are a great way to check react props.

# Install package by:

```bash
npm install --save prop-types
```

# Declare prop types for component syntax

```javascript
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
 
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,
 
  // A React element (ie. <MyComponent />).
  optionalElement: PropTypes.element,
 
  // A React element type (ie. MyComponent).
  optionalElementType: PropTypes.elementType,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
 
  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
```

# testing prop types
It is usually not necesary to test for all edge cases with prop types we want to test in most cases just the expected ones.
We can use existing npm package for testing prop types

```javascript
npm install --save-dev check-prop-types
```

```javascript
test('does not throw warning with expected props', () => {
    const expectedProps = {success: false}
    // Accepts propTypes, prop types we expect, what we are testing, name of the component
    const propError =checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
    //If no warning was thrown we will recive undefined
    expect(propError).toBeUndefined();
})
```

# define prop types on component

We need to import the PropTypes object to component

```javascript
import PropTypes from 'prop-types'
```

Define prop types for component after it was declared as a named dunction

```javascript
// Define prop types
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}
```

