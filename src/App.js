import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'James'
    }
  }
  
  render() {
    function ChangeName() {
      let p = document.querySelector('p')
      if (p.innerText === 'James') {
        this.setState({name: 'Megaman'})
      } else {
        p.innerText = 'James'
      }
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.name}
        </p>
          <button onClick={ChangeName}>Change Name</button>
      </header>
    </div>
  );
  }
  
}

export default App;
