import React from 'react';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class Tweets extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="user-box">
        <div className="user-heading">
          <p className="username">{this.props.tweetData.name}</p>
          <p className="at-username">@{this.props.tweetData.username}</p>
        </div>
        <div className="user-image">
          <img src={this.props.tweetData.profileImage} height="150px" width="150px"></img>
        </div>
        <div className="profile-text">
          <p className="messages-user-text">{this.props.tweetData.text}</p>
        </div>
        <div className="mini-button-section">
          <div className="tweet-time">
            <p className="time-since-tweet">{convertTime(this.props.tweetData.time)}</p>
          </div>
          <ButtonSection tweetId={this.props.tweetData.id} favorited={this.props.tweetData.favorited}/>
        </div>
      </div>
    )
  }
}

export default Tweets;
