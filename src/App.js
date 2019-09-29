import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Patrick', age: 30, hobbies: 'GW2'},
      {name: 'Aline', age: 31, hobbies: 'Patins'},
      {name: 'Nycole', age: 14, hobbies: 'Japa'},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 30, hobbies: 'GW2'},
        {name: 'Aline Martins', age: 31, hobbies: 'Patins'},
        {name: 'Nycole Martins', age: 14, hobbies: 'Japa'},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 30, hobbies: 'GW2'},
        {name: 'Aline New', age: 31, hobbies: 'Patins'},
        {name: 'Nycole Martins', age: 14, hobbies: 'Japa'},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Javascript is awesome!</h1>
        <p>works! =)</p>

        <button style={style} onClick={() => this.switchNameHandler('Opa')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Servo de Deus')}
          changed={this.nameChangedHandler}
        >
          {this.state.persons[0].hobbies}
        </Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          >
          {this.state.persons[1].hobbies}
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}
          >
          {this.state.persons[2].hobbies}
        </Person>

      </div>
    );
  }
}

export default App;