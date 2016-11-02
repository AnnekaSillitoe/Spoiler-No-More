import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

const querystring = require('querystring');

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      profileUpdates: {},
      editable: false,
      tweets: []
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        this.setState({
          profile: {
            name: response[0].name,
            username: response[0].username,
            profileImage: response[0].profileImage,
            profileText: response[0].profileText,
            followers: response[0].followersCount,
            following: response[0].friendsCount,
            location: response[0].location
          },
          tweets: response
        });
      }
    }.bind(this);
    xhr.open('GET', '/profilepage');
    xhr.send();
  }

  updateProfile() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({editable: false});
      }
    }.bind(this);
    xhr.open('POST', '/profilepages');
    console.log(this.state.profile);
    xhr.send(querystring.stringify(this.state.profile));
  }

  updateValue(value, event) {
    var update = {};
    update[value] = event.target.value;
    this.setState({profile: Object.assign(this.state.profile, update)})
  }

  render(){
    let tws = this.state.tweets.map((e, i) => {
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

    function editableName() {
      if (this.state.editable) {
        return <input className="profile-username text-box" type="text" defaultValue={this.state.profile.name} onKeyUp={this.updateValue.bind(null, "name")}></input>
      } else {
        return <p className="profile-username">{this.state.profile.name}</p>
      }
    };

    function editableBio() {
      if (this.state.editable) {
        return <input className="profile-user-text text-box" type="text" defaultValue={this.state.profile.profileText} onKeyUp={this.updateValue.bind(null, "profileText")}></input>
      } else {
        return <p className="profile-user-text">{this.state.profile.profileText}</p>
      }
    };

    function editableLocation() {
      if (this.state.editable) {
        return <input className="location-text text-box" type="text" defaultValue={this.state.profile.location} onKeyUp={this.updateValue.bind(null, "location")}></input>
      } else {
        return <p className="location-text">{this.state.profile.location}</p>
      }
    };

    function editableButton () {
      var edit;
      var submit;
      var onClick;
      if (this.state.editable) {
        edit = "hidden";
        submit = "block";
        onClick = function() {
          this.setState({editable: false});
          this.updateProfile();
        }.bind(this);
      } else {
        edit = "block";
        submit = "hidden";
        onClick = function () {
          this.setState({editable: true})
        }.bind(this);
      }
      return(
          <button className="edit-profile-box" onClick={onClick}>
            <i className={"material-icons edit-icon " + edit}>edit</i>
            <i className={"material-icons check-icon " + submit}>check</i>
          </button>
      )
    };

    return (
      <div>
        <TopBar/>
        <div className="profile-timeline">
          <div>
              <div className="profile-box">
                <div className="user-heading">
                  {editableName.call(this)}
                  <button className="button-profile-box">
                  <i className="material-icons settings-icon">settings</i>
                  </button>
                  <button className="button-profile-box">
                  <i className="material-icons group-icon">group</i>
                  </button>
                </div>
                <div className="profile-user-image">
                  <img className="profile-image" src={this.state.profile.profileImage} height="150px" width="150px"></img>
                </div>
                <div className="profile-text">
                  <p className="profile-at-username">@{this.state.profile.username}</p>
                  {editableButton.call(this)}
                  {editableBio.call(this)}
                </div>
                  <div className="profile-tweet-time">
                    <div className="followers-section">
                    <button className="button-following-box"><Link to="">
                      <p className="number-of-following">{this.state.profile.followers} Followers </p>
                    </Link></button>
                    <button className="button-following-box"><Link to="/following">
                      <p className="number-of-followers">{this.state.profile.following} Following</p>
                    </Link></button>
                    </div>
                    <div className="location-section">
                      {editableLocation.call(this)}<i className="material-icons location-icon">location_on</i>
                      </div>
                    </div>
                <div className="mid-bar">
                </div>
              </div>
          </div>
        </div>
        <div className="profile-user-timeline">
          {tws}
      </div>
        <BottomBar/>
      </div>
    );
  }
}

export default Profile;
