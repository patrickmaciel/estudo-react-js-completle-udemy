import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// React Hooks - useState is a Hook

// Isso é um Functional component
// useState permite que eu adicione o recurso de States (estados) em um componente funcional.

// This is a functional component
// useState allow us to add the state feature to functional components
const App = props => {
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        {name: 'Patrick', age: 30, hobbies: 'GW2'},
        {name: 'Aline', age: 31, hobbies: 'Patins'},
        {name: 'Nycole', age: 14, hobbies: 'Japa'},
      ]
    }
  );

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Patrick Maciel', age: 30, hobbies: 'GW2'},
        {name: 'Aline Martins', age: 31, hobbies: 'Patins'},
        {name: 'Nycole Martins', age: 14, hobbies: 'Japa'},
      ],
      // otherState: personsState.otherState // reddux not merge the old state, but replace it
    })
  };

  return (
    <div className="App">
      <h1>Javascript is awesome!</h1>
      <p>works! =)</p>

      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>{personsState.persons[0].hobbies}</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>{personsState.persons[1].hobbies}</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>{personsState.persons[2].hobbies}</Person>
    </div>
  );
}

export default App;