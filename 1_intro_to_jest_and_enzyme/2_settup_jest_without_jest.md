# steps to setup jest
1. npm inastall --save-dev jest

2. npm test script

3. package.json scripts:
```javascript
{
    "scripts": {"jest --watch"}
}
```

4. Create App.test.js in src/

```javascript

    import React from 'react'
    import App from './App'

    // Blank test
    test('resnders without error', ()=> {
        
    })
```