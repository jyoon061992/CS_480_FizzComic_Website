import React from 'react';
import axios from 'axios';
import "../stylesheets/Searchbar.css";
import Comicbook from "../Components/Comicbook"
class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }
  componentDidMount(){
    fetch('/api/comics')
      .then(result => result.json())
      .then(json => {this.setState({comics:json});
    });
  };

  handleChange = event => {
    this.setState({ email: event.target.value,
      pass:event.target.value,
      firstname:event.target.value ,
      lastname:event.target.value });
  }
  handleSubmit = event => {

    const user = {
      searchQuery: ''
    }
    var resultsFound = [];
    var searchableArray = this.state.comics;
    console.log(this.state);
    for (var i = 0; i < searchableArray.length; i++) {
      if(searchableArray[i].title.includes(this.state.searchQuery))
        resultsFound.push(searchableArray[i]);
        else if (searchableArray[i].writers.includes(this.state.searchQuery)) {
          resultsFound.push(searchableArray[i]);
        }
        else if (searchableArray[i].characters.includes(this.state.searchQuery)) {
          resultsFound.push(searchableArray[i]);
        }
    }
    this.state.comics = resultsFound;
};


  render() {
    return (
      <div className ="search">
        <h4>Comicbook Search</h4>
        <form>
        <p>
        <input className ="form-search"
        type ="text"
        placeholder ="Search by title, author, or characters"
        onChange = {event => this.setState({searchQuery: event.target.value})}
        />
        </p>
      <p>
        <button className ="search-button"
        type ="button"
        onClick = {event => this.handleSubmit().then}
        >
        search
        </button>
      </p>
      </form>
      </div>
    )
  }
}

export default Searchbar;
