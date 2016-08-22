import React from 'react';
import SearchLogo from './searchlogo.jsx';
import TimeoutLogo from './timeoutlogo.jsx';
import SpeechLogo from './speechlogo.jsx';

class TopBar extends React.Component{
  render(){
    return (
        <div className = "top-bar">
          <SearchLogo palette={{search:'rgba(174,133,200,1)'}}/>
          <TimeoutLogo palette={{timeout:'rgba(174,133,200,1)'}}/>
          <SpeechLogo palette={{speech:'rgba(174,133,200,1)'}}/>
        </div>
    )
  }
}

export default TopBar;
