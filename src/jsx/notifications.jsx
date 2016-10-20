import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderMessages from './topslidermessages.jsx';
import ButtonSection from './buttonsection.jsx';
import convertTime from '../helpers/converttime.js';

class Notifications extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rts: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          rts: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/rts");
    xhr.send();
  }

  render(){
    var retweets = this.state.rts.map((e, i) => {
      return (
        <div key={i} className="user-box">
          <div className="user-heading">
            <p className="username">{e.name}</p>
            <p className="at-username">@{e.screen_name}</p>
          </div>
          <div className="user-image">
            <img src={e.profile_image} height="150px" width="150px"></img>
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
    });

    return (
      <div>
        <TopBar/>
        <TopSliderMessages/>
        <div className="friends-list">
          {retweets}
        </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Notifications;
