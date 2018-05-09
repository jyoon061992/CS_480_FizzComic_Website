import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
  state = {
    email: '',
    pass: ' '
  }

  handleChange = event => {
    this.setState({ email: event.target.value, pass:event.target.value });
  }

  handleSubmit = event => {

    const user = {
      email: this.state.email,
      pass: this.state.pass
    };

    axios.post(`api/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
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
      onChange = {event => this.setState({pass: event.target.value})}
      />
      </p2>
      <p3>
      <button className ="submit-button"
      type ="button"
      onClick = {event => this.handleSubmit()}
      >
      Add user
      </button>
      </p3>
      </div>
    )
  }
}
export default PersonList;
