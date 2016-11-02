import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timeline: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          timeline: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open('GET', '/returndata');
    xhr.send();
  }

  render(){
    var tl = this.state.timeline.map((e, i) => {
      return (
        <div key={i} className="user-box">
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
            <ButtonSection tweetId={e.id} favorited={e.favorited}/>
          </div>
        </div>
      )
    })

    return (
      <div>
        <TopBar/>
        <div className="home-timeline">
          {tl}
        </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Home;
