import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import FollowingUsersIcon from './followingusericon.jsx';
import TopSliderLists from './topsliderlists.jsx';

class Following extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          friends: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/friendsid");
    xhr.send();
  }

  render(){
    var friendslist = this.state.friends.map(e => {
      return (
        <div className="account-box">
          <div className="image-square">
            <img src={e.profile_image} height="150px" width="150px"></img>
          </div>
          <div className="user-text">
            <p className="username">{e.name}</p>
            <p className="at-username">@{e.screen_name}</p>
          </div>
          <div className="profile-text">
            <p className="profile-user-text">{e.description}</p>
            <FollowingUsersIcon palette={{followinguser:'rgba(174,133,200,1)'}}/>
          </div>
        </div>
      )
    });

    return (
      <div>
          <TopBar/>
          <TopSliderLists/>
        <div className="friends-list">
          {friendslist}
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Following;
