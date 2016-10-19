import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          profile: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/profilepage");
    xhr.send();
  }

  render(){
    var profileInfo = this.state.profile.map(e => {
      return (
        <div>
            <div className="profile-box">
              <div className="user-heading">
                <p className="profile-username">{e.name}</p>
                <button className="button-profile-box">
                <i className="material-icons settings-icon">settings</i>
                </button>
                <button className="button-profile-box">
                <i className="material-icons group-icon">group</i>
                </button>
              </div>
              <div className="profile-user-image">
                <img src="https://pbs.twimg.com/profile_images/711716877584748544/PQkbemFL.jpg" height="150px" width="150px"></img>
              </div>
              <div className="profile-text">
                <p className="profile-at-username">@{e.username}</p>
                <p className="profile-user-text">{e.profileText}</p>
              </div>
                <div className="profile-tweet-time">
                  <div className="followers-section">
                  <button className="button-following-box"><Link to="/following">
                    <p className="number-of-following">{e.followersCount} Followers .</p>
                  </Link></button>
                  <button className="button-following-box"><Link to="/following">
                    <p className="number-of-followers">{e.friendsCount} Following</p>
                  </Link></button>
                  </div>
                  <div className="location-section">
                    <i className="material-icons location-icon">location_on</i><p className="location-text">{e.location}</p>
                    </div>
                  </div>
              <div className="mid-bar">
              </div>
            </div>
        </div>
      )
    });

    return (
      <div>
        <TopBar/>
        <div className="profile-timeline">
          {profileInfo}
        </div>
        <div className="profile-user-timeline">
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
      </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Profile;
