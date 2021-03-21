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
    // Scope mock set current guess so it is available to before each function. We want to set it as jest.fn and then clear it before each run
    let mockSetCurrentGuess = jest.fn();
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(()=> ["", mockSetCurrentGuess])
    })

    test('state updates with value of input box upon change', ()=> {


        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = {target: {value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('on submit state is cleared', ()=> {
        
        const wrapper = setup();
        const inputButton = findByTestAttr(wrapper, 'submit-button');
        inputButton.simulate('click', {preventDefault: () => null});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })
})