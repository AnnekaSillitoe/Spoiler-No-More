import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderLists from './topsliderlists.jsx';
import BlockUser from './blockuser.jsx';
import { Link } from 'react-router';

const querystring = require('querystring');

class Block extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      blocked: [],
      userblocked: true,
      blockuser: '',
    };
    this.updateUsersBlock = this.updateUsersBlock.bind(this);
    this.updateValue = this.updateValue.bind(this);
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

  updateUsersBlock() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.componentWillMount();
      }
    }.bind(this)
    xhr.open('POST', '/createblockuser');
    xhr.send(querystring.stringify({screen_name: this.state.blockuser}));
  };

  updateValue(value, event) {
    this.setState({blockuser: event.target.value})
  }

  render(){
    var friendslist = this.state.blocked.map((e, i) => {
      return (
        <BlockUser blockData={e} key={i}/>
      )
    });

    function editableBlock() {
      return(
        <div>
          <textarea maxLength="140" className="block-user-text-box" placeholder="Type here..." onKeyUp={this.updateValue.bind(null, "blockuser")}></textarea>
          <button className="edit-profile-box">
              <i className="material-icons submit-check-icon" onClick={this.updateUsersBlock}>check</i>
          </button>
          </div>
        )
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
