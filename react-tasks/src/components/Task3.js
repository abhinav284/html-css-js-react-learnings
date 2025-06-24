import React, { useState, useEffect } from 'react';

function Task3() {
  const [heading, setHeading] = useState('Welcome to  Tasks!');
  const [paragraph, setParagraph] = useState('Print Abhinav After 3 second.');

  useEffect(() => {
    const timer = setTimeout(() => {
      setParagraph('Abhinav');
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default Task3;
