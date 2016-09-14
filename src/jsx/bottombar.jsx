import React from 'react';
import HomeIcon from './homeicon.jsx';
import MessageIcon from './messageicon.jsx';
import ProfileIcon from './profileicon.jsx';
import ListsIcon from './listsicon.jsx';
import { Link } from 'react-router';

class BottomBar extends React.Component{
  render(){
    return (
      <div className = "bottom-bar">
          <button className = "icon-box"><Link to="/home">
            <HomeIcon palette={{home:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Home</p>
          </Link></button>
          <button className = "icon-box"><Link to="/lists">
            <ListsIcon palette={{list:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Lists</p>
          </Link></button>
          <button className = "icon-box"><Link to="/messages">
            <MessageIcon palette={{messages:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Messages</p>
          </Link></button>
        <button className = "icon-box"><Link to="/profile">
            <ProfileIcon palette={{profile:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Me</p>
          </Link></button>
      </div>
    )
  }
}

export default BottomBar;
