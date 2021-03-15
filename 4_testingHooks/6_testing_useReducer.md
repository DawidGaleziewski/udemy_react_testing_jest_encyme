Problem description
We will have to run useState twice in the App (once to get secret word and secod time to set the language).

We then have a issue to test useState with mock.

The way useReducer works

```javascript
[state, dispatch] = React.useReducer(reducer, initialState)
```

Similar to useState dispatch updates the state.
dispatch takes the argument we give it (a action) and sends that action with current state to the reducer.

By convention a action is a object with two properties (type and payload).
reducer will run a switch on that action type.
i.e if type is a 'secretWord' it will update the setLanguage but if its a 'lang' it will update the setLanguage part of the state.

useReducer is also used to do diffrent thing to the same part of state. It is similar to redux reducer.

It allows us to update a single key in a cleaner way