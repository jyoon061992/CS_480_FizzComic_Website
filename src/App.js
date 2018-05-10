import Newsfeed from './Components/Newsfeed';
import PersonList from './Components/Login';
import Signup from './Components/Signup';
import Searchbar from './Components/Searchbar';
import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
const Main = () => (
        <Router>
            <div className ="main-background">
              <header>
                <div className = "top_header"></div>
              <nav>
              <ul>
                  <Link to="/">Home </Link>
                  <Link to="/search">Search </Link>
                  <Link to="/profile">User Profile </Link>
                  <Link to="/register">Login/Signup </Link>
                  <Link to="/account">Account </Link>
              </ul>
              </nav>
              </header>
              <Route exact path="/" render={() => <Newsfeed/>}/>
              <Route  path="/search" render={() => <Searchbar/>}/>
              <Route exact path="/register" render={() => <Signup/>}/>
          </div>
        </Router>
    );

export default Main ;
