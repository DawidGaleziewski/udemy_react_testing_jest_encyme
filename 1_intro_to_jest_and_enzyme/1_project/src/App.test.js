// To create vdom we need shallow function from enzyme
import Enzyme, { shallow } from 'enzyme';
// We need to import adapter from 3rd party this may change in the future
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

//  Configure enzyme (letter in seperate file)
Enzyme.configure({adapter: new Adapter()})



test('renders without crashing', () => {
    // Shallow function will return a 'wrapper'
    // This is a test on its own as it will pass if the component did not crash 
    const wrapper = shallow(<App />)
    // Debug returns dom as a string. This is usefull if we want to see exactly what is happening with our tests
    // console.log(wrapper.debug())


    // Jest has its own assertion library (similar to chai)
    // Expect is a api that has assertions. we can expect the component to have something
    // toBeTruthy() is a assertion that component will be something diffrent then null for example
    expect(wrapper).toBeTruthy();

    // We should be suspecious of teststs that never fail! So we want to test for failure
    expect(wrapper).toBeFalsy()
});
