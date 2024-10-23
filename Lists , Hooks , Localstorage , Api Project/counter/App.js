import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count-display">{count}</div>
      <div className="buttons">
        <button className="increment-btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="decrement-btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

