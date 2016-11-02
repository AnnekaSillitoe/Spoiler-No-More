import React from 'react';
import { Link } from 'react-router';

const querystring = require('querystring');

class TopSliderLists extends React.Component{
  render(){
    return (
      <div className="top-slider">
        <button className="lists-following"><Link to="/lists">Lists</Link></button>
        <button className="lists-following"><Link to="/following">Following</Link></button>
      </div>
    )
  }
}

export default TopSliderLists;
