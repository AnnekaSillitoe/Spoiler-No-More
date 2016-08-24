import React from 'react';
import HomeIcon from './homeicon.jsx';
import MessageIcon from './messageicon.jsx';
import ProfileIcon from './profileicon.jsx';
import ListsIcon from './listsicon.jsx';

class BottomBar extends React.Component{
  render(){
    return (
      <div className = "bottom-bar">
          <div className = "icon-box">
            <HomeIcon palette={{home:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Home</p>
          </div>
          <div className = "icon-box">
            <ListsIcon palette={{list:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Lists</p>
          </div>
          <div className = "icon-box">
            <MessageIcon palette={{messages:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Messages</p>
          </div>
          <div className = "icon-box">
            <ProfileIcon palette={{profile:'rgba(174,133,200,1)'}}/>
            <p className="p-bottom-bar">Me</p>
          </div>
      </div>
    )
  }
}

export default BottomBar;
