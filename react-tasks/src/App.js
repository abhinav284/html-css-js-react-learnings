
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';
import Task14 from './components/Task14';



function App() {
  return (
    <Router>
      <div className="app">
        <h1>React Practice Tasks</h1>
        <nav>
          <ul>
            {[...Array(14)].map((_, i) => (
              <li key={i}>
                <Link to={`/task${i + 1}`}>Task {i + 1}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
          <Route path="/task7" element={<Task7 />} />
          <Route path="/task8" element={<Task8 />} />
          <Route path="/task9" element={<Task9 />} />
          <Route path="/task10" element={<Task10 />} />
          <Route path="/task11" element={<Task11 />} />
          <Route path="/task12" element={<Task12 />} />
          <Route path="/task13" element={<Task13 />} />
          <Route path="/task14" element={<Task14 />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
