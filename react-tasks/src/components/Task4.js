
import React from 'react';

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}


function Profile({ name, age, hobby }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Profile:</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Hobby:</strong> {hobby}</p>
    </div>
  );
}


function Task4() {
  return (
    <div>
      <h1>Task 4: Components and Props</h1>
      
      <Greeting name="Abhinav" />
      <Greeting name="Riya" />
      <Greeting name="Rahul" />

      <Profile name="Abhinav Kumar" age={23} hobby="Playing Football" />
      <Profile name="Riya Sharma" age={21} hobby="Drawing" />
      <Profile name="Rahul Verma" age={25} hobby="Cycling" />
    </div>
  );
}

export default Task4;
