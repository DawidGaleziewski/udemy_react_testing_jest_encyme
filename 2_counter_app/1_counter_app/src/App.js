import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter">The counter is currently&nbsp;<span data-test="count">{count}</span> </h1>
      <button onClick={()=> setCount(count + 1)} data-test="button">
        increment
      </button>
      <button onClick={()=> setCount(count - 1)} data-test="decrament-button">
        decrament
      </button>
    </div>
  );
}

export default App;
