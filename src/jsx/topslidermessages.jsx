import React from 'react';
import { Link } from 'react-router';

class TopSliderMessages extends React.Component{
  render(){
    return (
      <div className="top-slider">
        <button className="lists-following"><Link to="/notifications">Notifications</Link></button>
        <button className="lists-following"><Link to="/messages">Messages</Link></button>
      </div>
    )
  }
}

export default TopSliderMessages;
