import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile: [{}]
    };
  }

  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          profile: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open('GET', '/profilepage');
    xhr.send();
  }

  render(){

    let tl = this.state.profile.map((e, i) => {
      return(
    <div key={i} className="profile-user-box">
      <div className="user-heading">
        <p className="username">{e.name}</p>
        <p className="at-username">@{e.username}</p>
      </div>
      <div className="user-image">
        <img src={e.profileImage} height="150px" width="150px"></img>
      </div>
      <div className="profile-text">
        <p className="messages-user-text">{e.text}</p>
      </div>
      <div className="mini-button-section">
        <div className="tweet-time">
        <p className="time-since-tweet">{convertTime(e.time)}</p>
        </div>
      <ButtonSection/>
      </div>
    </div>
  );
    });

    return (
      <div>
        <TopBar/>
        <div className="profile-timeline">
          <div>
              <div className="profile-box">
                <div className="user-heading">
                  <p className="profile-username">{this.state.profile[0].name}</p>
                  <button className="button-profile-box">
                  <i className="material-icons settings-icon">settings</i>
                  </button>
                  <button className="button-profile-box">
                  <i className="material-icons group-icon">group</i>
                  </button>
                </div>
                <div className="profile-user-image">
                  <img className="profile-image" src={this.state.profile[0].profileImage} height="150px" width="150px"></img>
                </div>
                <div className="profile-text">
                  <p className="profile-at-username">@{this.state.profile[0].username}</p>
                  <button className="edit-profile-box">
                    <i className="material-icons edit-icon">edit</i>
                  </button>
                  <p className="profile-user-text">{this.state.profile[0].profileText}</p>
                </div>
                  <div className="profile-tweet-time">
                    <div className="followers-section">
                    <button className="button-following-box"><Link to="/following">
                      <p className="number-of-following">{this.state.profile[0].followersCount} Followers .</p>
                    </Link></button>
                    <button className="button-following-box"><Link to="/following">
                      <p className="number-of-followers">{this.state.profile[0].friendsCount} Following</p>
                    </Link></button>
                    </div>
                    <div className="location-section">
                      <i className="material-icons location-icon">location_on</i><p className="location-text">{this.state.profile[0].location}</p>
                      </div>
                    </div>
                <div className="mid-bar">
                </div>
              </div>
          </div>
        </div>
        <div className="profile-user-timeline">
          {tl}
      </div>
        <BottomBar/>
      </div>
    );
  }
}

export default Profile;
