  
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {findByTestAttr} from "./test/testUtils"
import App from './App';

import hookActions from './actions/hookActions';
import React from 'react';

Enzyme.configure({adapter: new Adapter()})

const mockGetSecretWord = jest.fn();

const setup = (secretWord="party")=> {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord;

  // We add our return value on mock
  // First is our secretWord
  // Second is a dispatch function that we are going to mock
  const mockUseReducer = jest.fn().mockReturnValue([
    {secretWord},
    jest.fn()
  ]);

  // Replace use reducer
  React.useReducer = mockUseReducer;

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

  test('secretWord does not update on App update', ()=> {

    const wrapper = setup();
    mockGetSecretWord.mockClear()
    // Using set props as update() method does not trigger useEffect https://github.com/enzymejs/enzyme/issues/2254

    // This should not trigger after setProps
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})


// It is good idea to have describe when we will have beforeEach used in tests
describe("secretWord is not null", ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = setup("party")
  })

  test("renders app when secretWord is not null", ()=> {
    const appComponent = findByTestAttr(wrapper, "component-app");
    // enzyme method called exists. Looks for a selector
    expect(appComponent.exists()).toBe(true);
  })

  test("does not render spinner when secretWord is not null", ()=> {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false)
  })
})

describe('secretWord is null', ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = setup(null)
  })

  test("does not render app when secretWord is null", ()=> {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  })

  test("does render spinner when secretWord is null", ()=> {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(true)
  })
})