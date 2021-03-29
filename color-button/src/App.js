import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(color) {
  return corolorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input onChange={(e) => setDisabled(e.target.checked)} type="checkbox" />
    </div>
  );
}

export default App;
