1. Install plugin:
 babel-plugin-react-remove-properties

 For cra 'npm run eject'

 2. Add to babel config:

 ```javascript
 {
  "env": {
    "production": {
      "plugins": [
        ["react-remove-properties", {"properties": ["data-test", "data-foo", /my-suffix-expression$/]}]
      ]
    }
  }
}

```

this can be done in package.json as well as babelrc