import React, { Component } from 'react';
import Login from './Components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }
  // componentDidMount() {
  //   fetch('/api/message')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }
  render() {
    return (
      <div className="App">
      <Login/>
      </div>
    );
  }
}

export default App;
