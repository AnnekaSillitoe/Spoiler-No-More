import React from 'react';
import { Link } from 'react-router';

const querystring = require('querystring');

class TopSliderNoLinks extends React.Component{
  render(){
    return (
      <div className="top-slider-timeout">
          <button className="lists-following"><Link to={"/liststimeout"}>Lists</Link></button>
          <button className="lists-following"><Link to={"/followingtimeout"}>Following</Link></button>
      </div>
    )
  }
}

export default TopSliderNoLinks;
