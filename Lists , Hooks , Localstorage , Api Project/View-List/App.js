import React from 'react';
import './App.css';

function App() {
  const tips = [
    { id: 1, text: 'First arr' },
    { id: 2, text: 'Second arr' },
    { id: 3, text: 'third arr' },
    { id: 4, text: 'Fourth arr' }
  ];

  return (
    <div className="App">
      <h1> List</h1>
      <ul className="tips-list">
        {tips.map((tip) => (
          <li key={tip.id}>
            <span role="img" aria-label="check">
              ✅
            </span>
            {tip.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
