import React, { Component } from 'react';
import Comicbook from './Comicbook';
import "../stylesheets/newsfeed.css"
class Newsfeed extends Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }
  componentDidMount(){
    fetch('/api/comics')
      .then(result => result.json(), console.log(this.result))
      .then(json => {this.setState({comics:json});
    });
  };
  render() {
    return (
      <div className="feed">
        <h4 className="feed-title">News feed</h4>
        <ul>
          <div className= "coverart">
          {this.state.comics.map(comics => {return <Comicbook key={comics.id} comics= {comics}/>;})}
          </div>
        </ul>
      </div>
    );
  }
}
export default Newsfeed;
