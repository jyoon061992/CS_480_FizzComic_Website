import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { accounts: [] };
  }
  componentDidMount(){
    fetch('/api/logins')
      .then(res => res.json())
      .then(accounts => this.setState({accounts:accounts}, () => console.log('accounts fetched', accounts)));
   }
  signUp()
  {
    console.log('this.state',this.state);
  }
  render() {
    return (
      <div className="login-form">
        <h3>Sign Up</h3>
        <input className ="form"
        type ="text"
        placeholder ="email"
        onChange = {event => this.setState({email: event.target.value})}
        />

        <p>
        <input className ="form"
        type ="password"
        placeholder ="password"
        onChange = {event => this.setState({password: event.target.value})}
        />
        </p>
        <p>
        <button className ="submit-button"
        type ="button"
        onClick = {() => this.signUp()}
        >
        submit
        </button>
        </p>
        <h5>Current account database</h5>
        <ul>
          {this.state.accounts.map(accounts =>
          <li key = {accounts.firstname}><p><img src ={accounts.coverArt}/></p><p>Title: {accounts.title}</p>Writers : {accounts.writers}</li>
        )}
        </ul>
      </div>
    );
  }
}
export default Login;
