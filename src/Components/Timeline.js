import React from 'react';
import axios from 'axios';
import "../stylesheets/Timeline.css"

class TimelineInput extends React.Component {
  state = {


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
              <p><i className = "proName"></i>here goes name</p>
              <p><i className = "proCity"></i>here goes location</p>
              <p><i className = "proBirth"></i>Here goes birth date</p>
              </div>
            </div>

            <div className = "centerColumn">
              <div className = "inputForm">
              <input className ="statInput"
              type ="text"
              placeholder ="Status:"
              />
              <button type = "button" className = "statButton">Post</button>
              </div>

              <div className = "statNews">
               <section className="statUser">
                <h2>Here goes name</h2>
                <p>
                Here goes the text, Here goes the text, Here goes the text,
                Here goes the text, Here goes the text, Here goes the text,
                Here goes the text, Here goes the text, Here goes the text,
                </p>
                <button type = "button" className = "likeButton">Like</button>
                <button type = "button" className = "commButton">Comment</button>
                </section>
              </div>
              <div className = "statNews">
               <section className="statUser">
                <h2>Here goes name</h2>
                <p>
                Here goes the text, Here goes the text, Here goes the text,
                Here goes the text, Here goes the text, Here goes the text,
                Here goes the text, Here goes the text, Here goes the text,
                </p>
                <button type = "button" className = "likeButton">Like</button>
                <button type = "button" className = "commButton">Comment</button>
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
export default TimelineInput;
