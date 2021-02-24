in jest.config.js

```javascript
    module.exports = {
        // We can add a array of scripts to run before our tests
        setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    }

```