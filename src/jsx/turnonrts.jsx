import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';
import Toggle from './toggle.jsx';

class TurnOnRTs extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
          <div className="colour-top-text">
            <button className="arrow-button"><Link to="/settings">
              <i className="material-icons back-arrow">keyboard_arrow_left</i>
            </Link></button>
          <p className="select-colour-text">Which notifications would you like to receive:</p>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">Retweets</button>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">Tags</button>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">Quote Tweets</button>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">Direct Messages</button>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">New Followers</button>
          </div>
          <div className="settings-box">
              <Toggle/>
            <button className="retweets-text">Likes</button>
          </div>
          <BottomBar/>
      </div>
    )
  }
}

export default TurnOnRTs;
