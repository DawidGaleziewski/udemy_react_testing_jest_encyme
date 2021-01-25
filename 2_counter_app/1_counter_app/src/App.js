import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter">The counter is currently</h1>
      <button data-test="button">
        increment
      </button>
    </div>
  );
}

export default App;
