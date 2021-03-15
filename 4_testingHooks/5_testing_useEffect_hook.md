In order to test mounting fect we need to use 'mount' and not 'shallow'.
useEffect will NOT get called on shallow. Mount will render the entire component

```javascript
  
// Need to use mount and not shallow for useEffect to work
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {findByTestAttr} from "./test/testUtils"
import App from './App';

import hookActions from './actions/hookActions';

Enzyme.configure({adapter: new Adapter()})

// Globally scoped mock secret word so we can re use it
const mockGetSecretWord = jest.fn();

const setup = ()=> {
  // We want to clear the mock before each test
  mockGetSecretWord.mockClear()
  // We will replace hookActions with our mock actions to spy on it
  hookActions.getSecretWord = mockGetSecretWord;

  // We use mount due to useEffect not beeing called on shallow (https://github.com/enzymejs/enzyme/issues/2086)
  return mount(<App />)
}

test('renders App component', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});


describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', ()=> {
    setup();

    // check to see if the secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  })
})

```