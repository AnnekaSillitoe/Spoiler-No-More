import React from 'react';
import SearchIcon from './searchicon.jsx';
import TimeoutIcon from './timeouticon.jsx';
import SpeechIcon from './speechicon.jsx';

class TopBar extends React.Component{
  render(){
    return (
        <div className = "top-bar">
            <button className = "top-button-1">
              <SearchIcon  palette={{search:'rgba(174,133,200,1)'}}/>
            </button>
            <button className = "top-button-2">
              <TimeoutIcon palette={{timeout:'rgba(174,133,200,1)'}}/>
            </button>
            <button className = "top-button-2">
              <SpeechIcon palette={{speech:'rgba(174,133,200,1)'}}/>
            </button>
        </div>
    )
  }
}

export default TopBar;
