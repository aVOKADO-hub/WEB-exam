import React, { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([
    { id: 1, color: 'green' },
    { id: 2, color: 'red' }
  ]);

  const toggleColors = () => {
    setColors(prevColors =>
      prevColors.map(square => ({
        ...square,
        color: square.color === 'green' ? 'red' : 'green'
      }))
    );
  };

  return (
    <div className="App">
      <h1>Практичне завдання №9</h1>
      <div className="squares-container">
        {colors.map(square => (
          <div
            key={square.id}
            className="square"
            style={{ backgroundColor: square.color }}
          ></div>
        ))}
      </div>
      <button onClick={toggleColors}>Старт</button>
    </div>
  );
}

export default App;
