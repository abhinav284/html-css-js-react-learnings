import React, { useState } from 'react';

function Task10() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c === '' ? '' : ((parseFloat(c) * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f === '' ? '' : (((parseFloat(f) - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div>
      <h2>Task 10: Lifting State Up</h2>

      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br /><br />

      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
      <br /><br />

      {celsius !== '' && (
        <p>
          {parseFloat(celsius) >= 100
            ? 'The water would boil.'
            : 'The water would not boil.'}
        </p>
      )}
    </div>
  );
}

export default Task10;
