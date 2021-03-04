  
// To create vdom we need shallow function from enzyme
import Enzyme, { shallow } from 'enzyme';
// We need to import adapter from 3rd party this may change in the future
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {findByTestAttr} from "./test/testUtils"
import App from './App';

//  Configure enzyme (letter in seperate file)
Enzyme.configure({adapter: new Adapter()})

test('renders App component', () => {
  const wrapper = shallow(<App />)
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});
