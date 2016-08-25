import React from 'react';
import TopBar from './topbar.jsx';
import BackArrow from './backarrow.jsx';
import BottomBar from './bottombar.jsx';

class Colour extends React.Component{
  render(){
    return (
      <div>
        <div className="topbar">
            <TopBar/>
        </div>
        <div className="top-text">
          <BackArrow palette={{backarrow:'#a0a2a3'}}/>
          <p className="select-colour">Select which colour you’d like to use:</p>
        </div>
        <div className="blue-box">
          <div className="blue-square"></div>
          <p className="colour-text">Blue</p>
        </div>
        <div className="green-box">
          <div className="green-square"></div>
          <p className="colour-text">Green</p>
        </div>
        <div className="pink-box">
          <div className="pink-square"></div>
          <p className="colour-text">Pink</p>
        </div>
        <div className="purple-box">
          <div className="purple-square"></div>
          <p className="colour-text">Purple</p>
        </div>
          <div className="bottombar">
          <BottomBar/>
        </div>
      </div>
    )
  }
}

export default Colour;
