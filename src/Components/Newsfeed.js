import React, { Component } from 'react';
//import './Login.css';
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
   }
  render() {
    return (
      <div className="feed">
        <h4>News feed</h4>
        <ul>
          <div className= "coverart">
          {this.state.comics.map(comics => {return <Comicbook key={comics.id}comics= {comics}/>;})}
          </div>
        </ul>
      </div>
    );
  }
}
export default Newsfeed;

// import React, { Component } from 'react';
// //import './Login.css';
// import Comicbook from './Comicbook';
// import './style_newsfeeds.css'
// import Sign_Up from './Sign_Up';
//
// class Newsfeed extends Component {
//   constructor() {
//     super();
//     this.state = { comics: [] };
//   }
//   componentDidMount(){
//     fetch('/api/newsfeed')
//       .then(result => result.json())
//       .then(json => {this.setState({comics:json});
//     });
//    }
//   render() {
//     return (
//       <
//
//         <div className = "newspage">
//         <ul>
//           {this.state.comics.map(comics => {
//             return <Comicbook comics= {comics}/>;
//           })}
//         </ul>
//       </div>
//     </div>
//     );
//   }
// }
// export default Newsfeed;
