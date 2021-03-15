 to test axios calls we need moxios.

 Testing a hookAction call:

 ```javascript
import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030');
    setSecretWord(response.data)
}

//  default export for mocking
export default {
    getSecretWord
}
 ```


Tests.
We use moxion to intercept and direct the calls to moxios librery and not the api server.
We need to setup moxios to respond with our desired response.
After that we create a jest mock function that we can spy on and check if it was called with desired argument

 ```javascript
import moxios from 'moxios';

import {getSecretWord} from './hookActions';


describe('moxios tests', ()=> {
    // We install maxios before each test. This way moxios will recive all our test calls and not HTTP server
    beforeEach(()=> {
        moxios.install();
    })

    // And we uninstall moxios after each test
    afterEach(()=> {
        moxios.uninstall()
    })

    // This test will be async as we will be waiting for our moxios answer
    test('calls the getSecretWord callback on axios response', async ()=> {
        const secretWord = 'party';

        // Moxios wait handles each calls during the test
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            // http response to the request
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })

        // Create mock for callback arg. We need it to spy on it
        const mockSetSecretWord = jest.fn();

        await getSecretWord(mockSetSecretWord);

        // see if the function was called with correct argument
        expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)
    })
    
})
 ```
