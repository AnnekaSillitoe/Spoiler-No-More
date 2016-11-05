import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

class Settings extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
        <div className="top-text">
          <p className="select-account">Settings</p>
        </div>
        <div className="settings-box">
          <button className="settings-text"><Link to='/drafts'>Drafts</Link></button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Turn off Retweets</button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Block Users</button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Notification Settings</button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Display Settings</button>
        </div>
        <div className="settings-box">
          <button className="settings-text">About</button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Sign Out</button>
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Settings;
