import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';

class ListMembers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lms: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          lms: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/listmembersall/" + this.props.params.id + '/' + this.props.params.slug);
    xhr.send();
  }

  render(){
    var members = this.state.lms.map((e, i) => {
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
        </div>
      )
    });

    return (
      <div>
        <TopBar/>
        <div className="home-timeline">
          {members}}
        </div>
        <BottomBar/>
      </div>
    )
  }
}

export default ListMembers;
