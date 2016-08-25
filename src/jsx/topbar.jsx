import React from 'react';
import SearchIcon from './searchicon.jsx';
import TimeoutIcon from './timeouticon.jsx';
import SpeechIcon from './speechicon.jsx';

class TopBar extends React.Component{
  render(){
    return (
        <div className = "top-bar">
              <SearchIcon  palette={{search:'rgba(174,133,200,1)'}}/>
              <TimeoutIcon palette={{timeout:'rgba(174,133,200,1)'}}/>
              <SpeechIcon palette={{speech:'rgba(174,133,200,1)'}}/>
        </div>
    )
  }
}

export default TopBar;
