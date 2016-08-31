import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import FollowingUsersIcon from './followingusericon.jsx';

class Following extends React.Component{
  render(){
    return (
      <div>
        <div className="topbar">
          <TopBar/>
        </div>
        <div className="top-slider">
          <button className="lists-following">Lists</button>
          <button className="lists-following">Following</button>
        </div>
        <div className="account-box">
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/664807873713725440/r8ZAg5lD.jpg" height="150px" width="150px"></img>
          </div>
          <div className="user-text">
            <p className="username">BasketBall</p>
            <p className="at-username">@BasketBall2016</p>
          </div>
          <div className="profile-text">
            <p className="test-text">This is where the profile text goes. It will cover multiple lines.</p>
            <FollowingUsersIcon palette={{followinguser:'rgba(174,133,200,1)'}}/>
          </div>
        </div>
        <div className="account-box">
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/664807873713725440/r8ZAg5lD.jpg" height="150px" width="150px"></img>
          </div>
          <div className="user-text">
            <p className="username">BasketBall</p>
            <p className="at-username">@BasketBall2016</p>
          </div>
          <div className="profile-text">
            <p className="test-text">This is where the profile text goes. It will cover multiple lines.</p>
            <FollowingUsersIcon palette={{followinguser:'rgba(174,133,200,1)'}}/>
          </div>
        </div>
        <div className="bottombar">
          <BottomBar/>
        </div>
      </div>
    )
  }
}

export default Following;
