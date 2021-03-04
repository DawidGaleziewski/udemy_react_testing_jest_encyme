import React, {Component} from 'react';
import './App.css';

import GuessedWords from './GuessedWords/GuessedWords';
import Congrats from './Congrats/Congrats'

const App = () => {

    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords GuessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
      </div>    
    );
  
  
}

export default App;
