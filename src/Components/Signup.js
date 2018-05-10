
import "../stylesheets/Signup.css"
import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
  state = {
    email: '',
    pass: ' ',
    firstname: ' ',
    lastname: ' '
  }

  handleChange = event => {
    this.setState({ email: event.target.value,
      pass:event.target.value,
      firstname:event.target.value ,
      lastname:event.target.value });
  }

  handleSubmit = event => {

    const user = {
      email: this.state.email,
      pass: this.state.pass,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    };

    axios.post(`api/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className ="formf">
        <h2>Login Form</h2>
        <form>
        <p>
        <input className ="fdorm-first"
        type ="text"
        placeholder ="First Name"
        onChange = {event => this.setState({firstname: event.target.value})}
        />
        </p>
        <p>
        <input className ="fdorm-last"
        type ="text"
        placeholder ="Last Name"
        onChange = {event => this.setState({lastname: event.target.value})}
        />
        </p>
      <p>
      <input className ="fordm-email"
      type ="text"
      placeholder ="email"
      onChange = {event => this.setState({email: event.target.value})}
      />
      </p>
      <p>
      <input className ="fdorm-password"
      type ="password"
      placeholder ="password"
      onChange = {event => this.setState({pass: event.target.value})}
      />
      </p>
      <p>
      <button className ="sdubmit-button"
      type ="button"
      onClick = {event => this.handleSubmit()}
      >
      Sign Up
      </button>
      </p>
      </form>
      </div>
    )
  }
}
export default PersonList;
