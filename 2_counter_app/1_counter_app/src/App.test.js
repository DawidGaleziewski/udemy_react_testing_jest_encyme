import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// Enzyme setup
Enzyme.configure({adapter: new Adapter()})

// At the beggining we want to think first what we test and when we want to be alerted, if something failed.
test('component renders without error', () => {
  const wrapper = shallow(<App/>)
  // Good standard is to use same names for wrapper components to not thing about it
  const appComponent = wrapper.find("[data-test='component-app']")
  // as find returns every element that matches this selector we can check length
  expect(appComponent.length).toBe(1);
});

// We will want a button so we want to test for button existing
test("render button", () => {

})

// We want to render counter display
test("render counter display", () => {

})

// Functionality test. We want to test that counter starts at 0 and clicking updates the counter display
test('counter starts at 0', ()=> {

})

test('clicking on the button increments counter display', ()=> {

})