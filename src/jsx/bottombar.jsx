import React from 'react';
import { Link } from 'react-router';

class BottomBar extends React.Component{
  render(){
    return (
      <div className = "bottom-bar">
          <button className = "icon-box"><Link to="/home">
            <i className="material-icons home-icon">home</i>
            <p className="p-bottom-bar">Home</p>
          </Link></button>
          <button className = "icon-box"><Link to="/lists">
            <i className="material-icons lists-icon">list</i>
            <p className="p-bottom-bar">Lists</p>
          </Link></button>
        <button className = "icon-box"><Link to = "/notifications">
            <i className="material-icons message-icon">mail outline</i>
            <p className="p-bottom-bar">Messages</p>
          </Link></button>
          <button className = "icon-box"><Link to="/profile">
            <i className="material-icons profile-icon">person</i>
            <p className="p-bottom-bar">Me</p>
          </Link></button>
      </div>
    )
  }
}

export default BottomBar;
