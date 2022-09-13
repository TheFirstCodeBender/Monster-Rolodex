import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Prince', lastName: 'Nwaonicha' },
      company: 'Google'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p id='Name'>
            {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <p id='Company'>{this.state.company}</p>
          <button onClick={() => {
            this.setState( // proper way to build set state
              () => {
                return {
                  name: { firstName: 'James', lastName: 'Nwaonicha' }
                }
              },
              () => { // this is not needed but could be used.
                console.log(this.state);
              }
            );
          }}>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
