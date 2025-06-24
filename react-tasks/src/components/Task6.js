import React, { useState } from 'react';

function Task6() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Task 6: Handling Events</h1>

      <button onClick={handleClick}>Click Me</button> <br /><br />
      <input 
        type="text" 
        placeholder="Type something..." 
        value={inputValue} 
        onChange={handleInputChange} 
      />

      <p>You typed: {inputValue}</p>
    </div>
  );
}
export default Task6;
