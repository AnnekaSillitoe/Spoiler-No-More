import React from 'react';

const querystring = require('querystring');

class Friend extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      following: true,
    };
    this.updateFriends = this.updateFriends.bind(this);
    this.reFriendsUpdate = this.reFriendsUpdate.bind(this);
    this.editableFollow = this.editableFollow.bind(this);
  }

  editableFollow () {
    var isFollowing;
    var notFollowing;
    var onClick;
    if (this.state.following) {
      isFollowing = "is-following";
      notFollowing = "not-following";
      onClick = function() {
        this.setState({following: false});
        this.updateFriends();
      }.bind(this);
    } else {
      isFollowing = "not-following";
      notFollowing = "is-following";
      onClick = function () {
        this.setState({following: true})
        this.reFriendsUpdate();
      }.bind(this);
    }
    return(
      <button className="following-button" onClick={onClick}>
        <i className={"material-icons following-user-icon " + isFollowing}>check_box</i>
        <i className={"material-icons following-user-icon grey " + notFollowing}>person_add</i>
      </button>
    )
  };

  updateFriends() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({following: false});
      }
    }.bind(this);
    xhr.open('POST', '/unfriend');
    console.log(this.props.friendData.id);
    xhr.send(querystring.stringify({id: this.props.friendData.id}));
  }

  reFriendsUpdate() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({following: true});
      }
    }.bind(this);
    xhr.open('POST', '/refriend');
    console.log(this.props.friendData.id);
    xhr.send(querystring.stringify({id: this.props.friendData.id}));
  }

  render(){
    return (
      <div className="account-box">
        <div className="image-square">
          <img src={this.props.friendData.profile_image} height="150px" width="150px"></img>
        </div>
        <div className="user-text">
          <p className="username">{this.props.friendData.name}</p>
          <p className="at-username">@{this.props.friendData.screen_name}</p>
        </div>
        <div className="profile-text">
          <p className="following-user-text">{this.props.friendData.description}</p>
          {this.editableFollow.call(this)}
        </div>
      </div>
    )
  }
}

export default Friend;
