import React from 'react';
import Toggle from './toggle.jsx';
import { Link } from 'react-router';

class TopBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
    this.onClickDropDown = this.onClickDropDown.bind(this);
  }

  onClickDropDown() {
    this.setState({dropDown: !this.state.dropDown})
  };

  render(){

    function dropDown() {
      if (this.state.dropDown) {
        return <div className="dropdown-menu">
          <Link className="menu-text" to="/newtweet"> New Tweet</Link>
          <Link className="menu-text" to="/newmessage"> New Message</Link>
        </div>
      }
    }

    return (
        <div className="top-bar">
            <button className="top-button-1">
                <i className="material-icons search-icon">search</i>
            </button>
            <div className="right-buttons">
                <button className = "top-button-2"><Link to="/timeout">
                    <i className="material-icons timeout-icon">timer</i>
                </Link></button>
                <button className = "top-button-3" onClick={this.onClickDropDown}>
                    <i className="material-icons speech-icon">chat</i>
                </button>
                {dropDown.call(this)}
            </div>
            <Toggle className="onoffswitch onoffswitch-homepage"/>
        </div>
    )
  }
}

export default TopBar;
