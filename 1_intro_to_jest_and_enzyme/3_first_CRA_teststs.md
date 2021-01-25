npm run test will run jest --watch
jest will check if any changes were made to tests since the last time

# watch mode
watch mode watches for changes and re-runs the tests basing on any changes to the code. By default watch mode watches for changes since last commit

If we have no new things to test since last commit it will display:
"No tests found related to files changed since last commit."

We can configure those in watch mode by pressing keys during watch mode is on:
'a' - We can force tests to run despite them not changing since last commit
'o' - revert to previous mode


press w during watch mode to see more info

# how jest knows what files to run?
by default jest will check for files in src/ directory that end with *.test.js. This can be configured to act siffrently

# how tests look like?

```javascript
// Test has two params
// 1. description that is a string
// 2. anonym function. If any errors are thrown it will fail a test
test('renders learn react link', () => {
  throw new Error
});

```

In most cases we will use expect method to expect something to be asserted if its true