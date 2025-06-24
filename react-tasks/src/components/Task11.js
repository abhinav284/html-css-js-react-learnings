import React, { useState, useEffect } from 'react';

function Task11() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>Task 11: Timer using Hooks</h2>
      <h3>Current Time: {time}</h3>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default Task11;
