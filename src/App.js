import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Patrick', age: 30, hobbies: 'GW2'},
      {name: 'Aline', age: 31, hobbies: 'Patins'},
      {name: 'Nycole', age: 14, hobbies: 'Japa'},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Javascript is awesome!</h1>
        <p>works! =)</p>
        <button>Switch Name</button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>{this.state.persons[0].hobbies}</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{this.state.persons[1].hobbies}</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>{this.state.persons[2].hobbies}</Person>
      </div>
    );
  }
}

export default App;