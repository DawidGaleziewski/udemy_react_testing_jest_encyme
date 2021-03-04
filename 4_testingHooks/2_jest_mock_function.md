# mock functions
fake functions that run insead of real function
can run a alternate code or just act as a placeholder

Jest replaces real functions with mock functions

Then we can assert on how many times mock run the test
and which arguments ran.

In redux we only spied on mock functions.

With hooks we will sometimes make replacment functions.
We will sometimes make replacment functions

Mocks serve 3 purposes.
- prevent real functions to run (like server functions)
- spy ona function to know when it was called
- provide return values to set test conditions
i.e for useState hook

In jest we will test by replacing functions with mocks.

!IMPORTANT we do not want to destructure on imports in non-test code

This is what we want to do:

```javascript
    import React from 'react'
    const lang = React.useContext(langContext)    
```

DONT DO THIS:
```javascript
    import {useContext} from 'react'
    const lang = useContext(langContext)    
```

