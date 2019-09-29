import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Javascript is awesome!</h1>
      <p>works! =)</p>
      <Person name='Patrick' age='30'>My hobbies is: Play GW2 and study new techologies</Person>
    </div>
  );
}

export default App;
