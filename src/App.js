import React, { Component } from 'react';
import Newsfeed from './Components/Newsfeed';
class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  render() {
    return (
      <div className="App">
      <Newsfeed/>
      </div>
    );
  }
}

export default App;
