import React from 'react';
import "../stylesheets/Comicbook.css"
const Comicbook = (props) => {
  return (
    <li>
      <div className="comicbook-element">
        <div className="title">
          Title: {props.comics.title}
        </div>
        <div className="authors">
          Writers: {props.comics.writers}
        </div>
        <div className="coverart">
          <img key={props.comics.id} src={props.comics.coverArt}/>
        </div>
      </div>
    </li>
  );
}
export default Comicbook;
