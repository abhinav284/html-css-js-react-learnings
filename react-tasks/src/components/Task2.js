import React from 'react';

function Task2() {
  const name = 'Abhinav';
  const today = new Date().toLocaleDateString();
  const sum = 5 + 7;

  const jsxElement = (
    <div>
      <h2>Hello, my name is {name}.</h2>
      <p>Today's date is: {today}</p>
      <p>Did you know? 5 + 7 = {sum}</p>
    </div>
  );

  return jsxElement;
}

export default Task2;
