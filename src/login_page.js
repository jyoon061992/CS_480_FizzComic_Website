import { withRouter } from 'react-router';
import React, { Component } from 'react';
class PageLogin extends React.Component {
    login() {
        this.props.router.push('/login'); // for react-router@3 it would be this.props.router.push('/some/location');
    }
    render() {
        return (
            <div className="login-page">
                <form action="">
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button onClick={this.login}>Login</button>
                    </div>
                      <button className ="login-button"
                      type ="button"
                      onClick = {() => this.login()}
                      >
                      submit
                      </button>
                </form>
            </div>
        )
    }
}
export default PageLogin;
