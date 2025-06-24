import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function WindowSizeComponent() {
  const width = useWindowWidth();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Task 14: useWindowWidth Hook</h2>
      <p>Window Width: {width}px</p>
      <h3>{width >= 768 ? 'Wide screen' : 'Narrow screen'}</h3>
    </div>
  );
}

export default WindowSizeComponent;
