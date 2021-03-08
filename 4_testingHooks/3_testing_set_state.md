It is important we do not destructure the React.useState hook in our component for this to work:

```javascript
    const [currentGuess, setCurrentGuess] = React.useState("");

```

```javascript
describe('state controlled input field', ()=> {
    test('state updates with value of input box upon change', ()=> {
        const mockSetCurrentGuess = jest.fn();
        // We replace useState with another mock
        // This function, when test runs will replace the hook returning intialState and setState function to our custome ones
        React.useState = jest.fn(()=> ["", mockSetCurrentGuess])

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        //  We create a mock event that will simulate the change on the form
        const mockEvent = {target: {value: 'train'}};
        //  Then we simulate the input box getting a value of 'train'
        inputBox.simulate("change", mockEvent);

        // We can check if our mock function have been called with the correct value
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

        // Function should go red with "Number of calls: 0" as the function was not called
    })
})

```

Important on prevent default

```javascript

    test('on submit state is cleared', ()=> {
        
        const wrapper = setup();
        const inputButton = findByTestAttr(wrapper, 'submit-button');

        // We want to give our click a empty button as otherwise our mock function wont have a event and prevent default. We fix this by adding object with preventDefault function that does nothing
        inputButton.simulate('click', {preventDefault: () => null});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })
```