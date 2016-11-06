import React from 'react';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class Tweets extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profile: [{}]
  //   }
  // }
  //
  // componentWillMount() {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       this.setState({
  //         profile: JSON.parse(xhr.response)
  //       });
  //     }
  //   }.bind(this);
  //   xhr.open("GET", "/profilepage");
  //   xhr.send();
  // }

  render(){
    var tl = this.state.profile.map((e, i) => {
      return (
      <div className="tweets">
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
    )
    })
  }
}

export default Tweets;
