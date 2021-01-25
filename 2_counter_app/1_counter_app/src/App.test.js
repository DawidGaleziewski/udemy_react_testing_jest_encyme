import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// Enzyme setup
Enzyme.configure({adapter: new Adapter()})

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 */
const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('app component renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test("render button", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'button')
  expect(button.length).toBe(1)
})

test("render counter display", () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'counter')
  expect(counter.length).toBe(1)
})

test('counter starts at 0', ()=> {

})

test('clicking on the button increments counter display', ()=> {

})