import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderLists from './topsliderlists.jsx';
import Friend from './friend.jsx';
import { Link } from 'react-router';

class Block extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      blocked: [],
    };
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          blocked: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open('GET', '/blocked');
    xhr.send();
  }

  render(){
    var friendslist = this.state.blocked.map((e, i) => {
      return (
        <div key={i} className="account-box">
          <div className="image-square">
            <img src={e.profile_image} height="150px" width="150px"></img>
          </div>
          <div className="user-text">
            <p className="username">{e.name}</p>
            <p className="at-username">@{e.screen_name}</p>
          </div>
          <div className="profile-text">
            <p className="following-user-text">{e.description}</p>
              <button className="following-button">
                <i className="material-icons following-user-icon red">block</i>
              </button>
          </div>
        </div>
      )
    })

    function editableBlock() {
      return <textarea maxLength="140" className="block-user-text-box" placeholder="Type here..."></textarea>
    };

    return (
      <div>
          <TopBar/>
            <div className="colour-top-text">
              <button className="arrow-button"><Link to='/settings'>
                  <i className="material-icons back-arrow">keyboard_arrow_left</i>
              </Link></button>
            <p className="select-colour-text">Enter the username you'd like to block:</p>
            </div>
            {editableBlock.call(this)}
        <div className="block-list">
          {friendslist}
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Block;
