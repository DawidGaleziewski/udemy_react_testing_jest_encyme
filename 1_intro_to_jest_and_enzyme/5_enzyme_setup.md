# Why enzyme?
enzyme creates a virtual dom.
This allows to test without a browser

Enzyme allows us to search the DOM using jsquery style selectors.

Enzyme can create events like 'click'

Shallow element rendering. We can render components one level deep. It will render the parent and put placeholders for children. This helps us have cleaner and faster tests

Shallow
```javascript
<div>
    <p>Input component here</p>
    Those will use placeholder
    <NewComponent1 />
    <NewComponent2 />
</div>
```

Mount
```javascript
<div>
    <p>Input component here</p>
    Those will render in full:
    <NewComponent1 />
    <NewComponent2 />
</div>
```

Shallow is more isolated.

Enzyme provides us access to props and state of component

# setup enzyme
Depending on react version diffrent addapter may be needed

1. Install libraries
npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16

2. Import and configure enzyme

```javascript
import Enzyme, { EnzymeAdapter } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new EnzymeAdapter()})
```