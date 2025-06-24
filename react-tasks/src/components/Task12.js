import React, { useState } from 'react';

function Task12() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 12: Counter using useState</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Task12;
