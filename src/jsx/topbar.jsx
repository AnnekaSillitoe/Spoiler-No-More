import React from 'react';
import SearchIcon from './searchicon.jsx';
import TimeoutIcon from './timeouticon.jsx';
import SpeechIcon from './speechicon.jsx';
import { Link } from 'react-router';

class TopBar extends React.Component{
  render(){
    return (
        <div className = "top-bar">
            <button className = "top-button-1">
              <SearchIcon palette={{search:'rgba(174,133,200,1)'}}/>
            </button>
            <button className = "top-button-2"><Link to="/newtweet">
              <SpeechIcon palette={{speech:'rgba(174,133,200,1)'}}/>
            </Link></button>
            <button className = "top-button-2"><Link to="/timeout">
              <TimeoutIcon palette={{timeout:'rgba(174,133,200,1)'}}/>
            </Link></button>
        </div>
    )
  }
}

export default TopBar;
