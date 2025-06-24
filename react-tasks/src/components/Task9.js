
import React, { useState } from 'react';

function Task9() {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Name: ${name}`);
    setName('');
  };

  return (
    <div>
      <h1>Task 9: Controlled Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" disabled={name.trim() === ''}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Task9;