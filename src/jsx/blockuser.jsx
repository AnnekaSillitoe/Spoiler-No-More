import React from 'react';

const querystring = require('querystring');

class BlockUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      blockeduser: true,
    };
    this.updateBlocks = this.updateBlocks.bind(this);
    this.reBlockUpdate = this.reBlockUpdate.bind(this);
    this.editBlockIcon = this.editBlockIcon.bind(this);
  }

  editBlockIcon () {
    var notBlock;
    var onClick;
    if (this.state.blockeduser) {
      notBlock = "red";
      onClick = function() {
        this.setState({blockeduser: false});
        this.updateBlocks();
      }.bind(this);
    } else {
      notBlock = "grey";
      onClick = function () {
        this.setState({blockeduser: true})
        this.reBlockUpdate();
      }.bind(this);
    }
    return(
        <button className="following-button" onClick={onClick}>
          <i className={"material-icons following-user-icon " + notBlock}>block</i>
        </button>
    )
  }

  updateBlocks() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({blockeduser: false});
      }
    }.bind(this)
    xhr.open('POST', '/blockuser');
    xhr.send(querystring.stringify({id: this.props.blockData.id}));
  };

  reBlockUpdate() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({blockuser: true});
      }
    }.bind(this);
    xhr.open('POST', '/reblockuser');
    xhr.send(querystring.stringify({id: this.props.blockData.id}));
  }

  render(){
    return (
        <div className="account-box">
          <div className="image-square">
            <img src={this.props.blockData.profile_image} height="150px" width="150px"></img>
          </div>
          <div className="user-text">
            <p className="username">{this.props.blockData.name}</p>
            <p className="at-username">@{this.props.blockData.screen_name}</p>
          </div>
          <div className="profile-text">
            <p className="following-user-text">{this.props.blockData.description}</p>
            {this.editBlockIcon.call(this)}
          </div>
        </div>
    )
  }
}

export default BlockUser;
