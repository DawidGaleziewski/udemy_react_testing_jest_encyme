import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from "../test/testUtils"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Input from "./Input";
Enzyme.configure({adapter: new Adapter()})

const setup = () => shallow(<Input secretWord='test' />)

test('did component render', ()=> {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1);
})

test('component accepts correct prop types', ()=> {
    checkProps(Input, {secretWord: 'Monkey'})
})

describe('state controlled input field', ()=> {
    test('state updates with value of input box upon change', ()=> {
        const mockSetCurrentGuess = jest.fn();
        // We replace useState with another mock
        // This function, when test runs will replace the hook returning intialState and setState function to our custome ones
        React.useState = jest.fn(()=> ["", mockSetCurrentGuess])

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        //  We create a mock event that will simulate the change on the form
        const mockEvent = {target: {value: 'train'}};
        //  Then we simulate the input box getting a value of 'train'
        inputBox.simulate("change", mockEvent);

        // We can check if our mock function have been called with the correct value
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

        // Function should go red with "Number of calls: 0" as the function was not called
    })
})