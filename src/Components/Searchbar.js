// import React, { Component } from 'react';
 import "../stylesheets/Searchbar.css"
// class Searchbar extends Component {
//   constructor() {
//     super();
//     this.state = { search: '' };
//   }
//   updateSearch(event)
//   {
//     console.log(event.target.value);
//     this.setState({search:event.target.value});
//   }
//   render() {
//     return (
//       <div className="searchbar">
//         <input type="text"
//           placeholder="Search by title"
//           value={this.state.search}
//           onChange={this.updateSearch.bind(this)}/>
//           <button className ="submit-button"
//           type ="button"
//           onClick = {() => this.signUp()}
//           >
//           search
//           </button>
//       </div>
//     );
//   }
// }
// export default Searchbar;
 import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
// constructor() {
//   super();
//   this.state = { comics: [] }
// }
// componentDidMount(){
//   fetch('/api/comics')
//     .then(result => result.json(), console.log(this.result))
//     .then(json => {this.setState({comics:json});
//   });
// }
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Example extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a title of a comic',
      value,
      onChange: this.onChange
    };
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default Example;
