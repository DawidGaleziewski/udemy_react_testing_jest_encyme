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