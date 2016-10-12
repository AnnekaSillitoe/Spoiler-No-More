import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import ButtonSection from './buttonsection.jsx';

class Profile extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
        <div className = "profile-timeline">
        <div className="profile-box">
          <div className="user-heading">
            <p className="profile-username">username</p>
            <i className="material-icons settings-icon">settings</i>
            <i className="material-icons group-icon">group</i>
          </div>
          <div className="profile-user-image">
            <img src="https://pbs.twimg.com/profile_images/711716877584748544/PQkbemFL.jpg" height="150px" width="150px"></img>
          </div>
          <div className="profile-text">
            <p className="profile-at-username">@username</p>
            <p className="messages-user-text">This is stock text.</p>
          </div>
          <div className="mini-button-section">
            <div className="profile-tweet-time">
              <p className="number-of-following">2 following .</p>
              <p className="number-of-followers">2 followers</p>
              <i className="material-icons location-icon">location_on</i><p className="location-text">Location</p>
            </div>
          </div>
        </div>
        </div>
          <div className="mid-bar">
            </div>
            <div className="profile-user-box">
              <div className="user-heading">
                <p className="username">username</p>
                <p className="at-username">@username</p>
              </div>
              <div className="user-image">
                <img src="https://pbs.twimg.com/profile_images/711716877584748544/PQkbemFL.jpg" height="150px" width="150px"></img>
              </div>
              <div className="profile-text">
                <p className="messages-user-text">This is stock text.</p>
            </div>
            <div className="mini-button-section">
              <div className="tweet-time">
                <p className="time-since-tweet">2 Seconds</p>
              </div>
              <ButtonSection/>
            </div>
            </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Profile;
