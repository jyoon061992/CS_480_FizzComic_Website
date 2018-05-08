import React, { Component } from 'react';
//import './Login.css';
import Comicbook from './Comicbook';
class Newsfeed extends Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }
  componentDidMount(){
    fetch('/api/newsfeed')
      .then(result => result.json())
      .then(json => {this.setState({comics:json});
    });
   }
  render() {
    return (
      <div className="login-form">
        <h3>Sign Up</h3>
        <input className ="form"
        type ="text"
        placeholder ="email"
        //onChange = {event => this.setState({email: event.target.value})}
        />
        <p>
        <input className ="form"
        type ="password"
        placeholder ="password"
        //onChange = {event => this.setState({password: event.target.value})}
        />
        </p>
        <p>
        <button className ="submit-button"
        type ="button"
        //onClick = {() => this.signUp()}
        >
        submit
        </button>
        </p>
        <h5>Newsfeed</h5>
        <ul>
          {this.state.comics.map(comics => {
            return <Comicbook comics= {comics}/>;
          })}
        </ul>
      </div>
    );
  }
}
export default Newsfeed;
