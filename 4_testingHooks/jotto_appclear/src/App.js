import React, {Component} from 'react';
import hookActions from './actions/hookActions';
import './App.css';

import Input from './Input/Input';

import GuessedWords from './GuessedWords/GuessedWords';
import Congrats from './Congrats/Congrats'

/**
 * reducer to update state, called automatically by dispatch
 * @param state {object} - existing state 
 * @param action {object} - contains 'type' and 'payload' properties for state update
 */
function reducer(state, action){
  switch(action.type){
    case 'setSecretWord':
      return {...state, secretWord: action.payload}
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

const App = () => {

    const [state, dispatch] = React.useReducer(reducer, {secretWord: null})

    const setSecretWord = (secretWord) => dispatch({type: 'setSecretWord', payload: secretWord});

    React.useEffect(
      ()=> {
        hookActions.getSecretWord(setSecretWord);
      }, [])

      if(!state.secretWord){
        return (
          <div className="container" data-test="spinner">
            <div className="spinner-border" role="status">
              <span className="sr-only">
                Loading...
              </span>
            </div>
            <p>Loading secret word</p>
          </div>
        )
      }

    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Input secretWord={state.secretWord} />
        <Congrats success={true} />
        <GuessedWords GuessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
      </div>    
    );
  
  
}

export default App;
