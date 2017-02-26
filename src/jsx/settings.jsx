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
          <button className="settings-text"><Link to='/turnonrts'>Turn off Retweets</Link></button>
        </div>
        <div className="settings-box">
          <button className="settings-text"><Link to='/block'>Block Users</Link></button>
        </div>
        <div className="settings-box">
          <button className="settings-text">Notification Settings</button>
        </div>
        <div className="settings-box">
          <button className="settings-text"><Link to='/display'>Display Settings</Link></button>
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
