import React, { Component } from 'react';
import Login from './Components/Login';
class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  render() {
    return (
      <div className="App">
      <Login/>
      </div>
    );
  }
}

export default App;
