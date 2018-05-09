import React, { Component } from 'react';
import "../stylesheets/Signup.css"
class Signup extends Component {
  constructor() {
    super();
    this.state = { signups: [] };
  }
  signUp()
    {
      console.log('this.state',this.state);
    }
  render() {
    return (
      <div className="login-form">
      <h3>Sign in</h3>
        <p1>
        <input className ="form"
        type ="text"
        placeholder ="email"
        onChange = {event => this.setState({email: event.target.value})}
        />
        </p1>
        <p2>
        <input className ="form"
        type ="password"
        placeholder ="password"
        onChange = {event => this.setState({password: event.target.value})}
        />
        </p2>
        <p3>
        <button className ="submit-button"
        type ="button"
        onClick = {() => this.signUp()}
        >
        Sign Up
        </button>
        </p3>
        <p4>
        <button className = "sign-in"
        type = "button"
        >
        Sign in
        </button>
        </p4>
        </div>
    );
  }
}
export default Signup;
