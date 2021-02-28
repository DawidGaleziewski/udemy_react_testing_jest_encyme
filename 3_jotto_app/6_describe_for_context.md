Describe is a way of grouping tests:

```javascript
describe('if there are words guessed', ()=> {
    
})

```

We can use it to put multiple connected test in one scope:

```javascript
describe('if there are no words guessed', ()=> {
    // We can use beforeEach in describe group to run a function before each test. We scope wrapper so that other test functions can gab it as well
    let wrapper 
    beforeEach(()=> {
        wrapper = setup({GuessedWords:[]})
    })
    // If there are no words guessed we want to continue here
    test('renders withour error', ()=> {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instructions to guess a word', ()=> {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        //  We dont want to test each time if text matches as it can change. We just want to test if there is any text in the instructions
        expect(instructions.text().length).not.toBe(0)
    })
})

```