
import React, { useState } from 'react';

function Task8() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango']);
  const [newFruit, setNewFruit] = useState('');

  const handleInputChange = (e) => setNewFruit(e.target.value);

  const addFruit = () => {
    if (newFruit.trim() === '') return;
    setFruits([...fruits, newFruit.trim()]);
    setNewFruit('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addFruit();
  };

  return (
    <div>
      <h1>Task 8: Lists and Keys</h1>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>  // Using index as key (ok here but better unique ids for real apps)
        ))}
      </ul>

      <input
        type="text"
        placeholder="Add a new fruit"
        value={newFruit}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
}

export default Task8;
