import React, { Component } from 'react';
import "../stylesheets/Searchbar.css"
class Searchbar extends Component {
  constructor() {
    super();
    this.state = { search: '' };
  }
  updateSearch(event)
  {
    console.log(event.target.value);
    this.setState({search:event.target.value});
  }
  render() {
    return (
      <div className="searchbar">
        <input type="text"
          placeholder="Search by title"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
          <button className ="submit-button"
          type ="button"
          onClick = {() => this.signUp()}
          >
          search
          </button>
      </div>
    );
  }
}
export default Searchbar;
