import Enzyme, { EnzymeAdapter } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

//  Configure enzyme (letter in seperate file)
Enzyme.configure({adapter: new EnzymeAdapter()})



test('renders learn react link', () => {
 
});
