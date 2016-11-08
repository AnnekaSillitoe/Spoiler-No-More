import React from 'react';
import { Link } from 'react-router';

const querystring = require('querystring');

class TopSliderNoLinks extends React.Component{
  render(){
    return (
      <div className="top-slider-no-links">
        <button className="lists-following">Lists</button>
        <button className="lists-following">Following</button>
      </div>
    )
  }
}

export default TopSliderNoLinks;
