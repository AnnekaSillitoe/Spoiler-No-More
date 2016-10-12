import React from 'react';
import ReplyIcon from './replyicon.jsx';
import { Link } from 'react-router';

class ButtonSection extends React.Component{
  render(){
    return (
      <div className = "button-section">
          <button className = "button-icon-box">
            <i className="material-icons repeat-icon">reply</i>
          </button>
          <button className = "button-icon-box">
            <i className="material-icons repeat-icon">repeat</i>
          </button>
          <button className = "button-icon-box">
            <i className="material-icons repeat-icon">favorite</i>
          </button>
      </div>
    )
  }
}

export default ButtonSection;
