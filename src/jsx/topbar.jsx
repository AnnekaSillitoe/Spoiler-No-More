import React from 'react';
import { Link } from 'react-router';

class TopBar extends React.Component{
  render(){
    return (
        <div className = "top-bar">
            <button className = "top-button-1">
              <i className="material-icons search-icon">search</i>
            </button>
            <button className = "top-button-2"><Link to="/newtweet">
              <i className="material-icons speech-icon">chat</i>
            </Link></button>
            <button className = "top-button-2"><Link to="/timeout">
              <i className="material-icons timeout-icon">timer</i>
            </Link></button>
        </div>
    )
  }
}

export default TopBar;
