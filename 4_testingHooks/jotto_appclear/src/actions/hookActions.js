import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
    const {data:{title}} = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
    setSecretWord(title)
}

//  default export for mocking
export default {
    getSecretWord
}