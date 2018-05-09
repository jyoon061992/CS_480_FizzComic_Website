import React, { Component } from 'react';
import Newsfeed from './Components/Newsfeed';
import Searchbar from './Components/Searchbar';
import PersonList from './Components/Login';
import Signup from './Components/Signup';
//import Pagelogin from './login_page';
import "./App.css"
class App extends Component {
  render() {
    return (
      <div>
          <header>

            <div className = "top_header"></div>
          </header>
            <div className = "top-menu">
                   <nav>
                    <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">Comic Search</a></li>
                      <li><a href="">User Profile</a></li>
                    </ul>
                  </nav>
            </div>
            <div className = "bar"><PersonList/></div>

          <Newsfeed/>
          </div>
    );
  }
}

export default App ;
