import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderMessages from './topslidermessages.jsx';

class Messages extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dms: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      console.log(xhr.response);
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        this.setState({
          dms: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/dms");
    xhr.send();
  }

  render(){
    var direct_messages = this.state.dms.map(e => {
      return (
        <div className="user-box">
          <div className="user-heading">
            <p className="username">{e.name}</p>
            <p className="at-username">{e.screen_name}</p>
          </div>
          <div className="user-image">
            <img src={e.profile_image} height="150px" width="150px"></img>
          </div>
          <div className="profile-text">
            <p className="messages-user-text">{e.text}</p>
        </div>
        </div>
      )
    });

    return (
      <div>
        <TopBar/>
        <TopSliderMessages/>
        <div className="friends-list">
          {direct_messages}
        </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Messages;
