import React from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import "../stylesheets/Timeline.css"

class Timeline extends React.Component {
constructor(props){
  super(props);
  this.state = {accounts: []};
}

componentDidMount(){
  fetch('/api/getuser')
      .then(res => res.json())
      .then(json =>{this.setState({accounts:json});
    });
}

makePost(){
  this.props.router.push('/makepost');
}

makeComment(){

  
}

render(){
  return(

    <div className = "pageContainer">
      <div className = "row">
        <div className = "column">
          <div className ="leftColumn">
            <div className = "profileForm">
              <div clssName = "proContainer">
              <h1 className = "proTitle" > My Profile </h1>

              <p>
              {this.state.accounts.map(user =>
              <p>
                <img src={user.profilepicture} width = "130" height = "130"/>
                <p>name: {user.firstname + " " + user.lastname}</p>
              <p>email: {user.username}</p>
              </p>
              )}
              </p>
              </div>
            </div>

            <div className = "centerColumn">
              <div className = "inputForm">
              <input className ="statInput"
              type ="text"
              placeholder ="Status"
              name = "content"
              />
              <button type = "button" className = "statButton"
              onClick = {() => this.makePost()}>
              Post</button>
              </div>

              <div className = "statNews">
                <section className="statUser">
                  <h2>Bryan Rivera</h2>
                    <p>
                    I went to hiking
                    </p>
                    <button type = "button" className = "likeButton">Like</button>
                    <button type = "button" className = "commButton">Comment</button>
                    </section>
            </div>

            <div className = "statNews">
              <section className="statUser">
                <h2>Bryan Rivera</h2>
                  <p>
                  Roberto, Jong, Adrian, and Jordan
                  </p>
                  <button type = "button" className = "likeButton">Like</button>
                  <button type = "button" className = "commButton"
                  onClick = {() => this.makeComment()} >Comment</button>
                  </section>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default Timeline;
