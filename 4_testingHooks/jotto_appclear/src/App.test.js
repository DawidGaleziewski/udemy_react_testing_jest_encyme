  
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {findByTestAttr} from "./test/testUtils"
import App from './App';

import hookActions from './actions/hookActions';

Enzyme.configure({adapter: new Adapter()})

const mockGetSecretWord = jest.fn();

const setup = ()=> {
  mockGetSecretWord.mockClear()
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
    expect(mockGetSecretWord).toHaveBeenCalled();
  })
})