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
        //Rectangle
        <p>Blue</p>
        //Rectangle
        <p>Green</p>
        //Rectangle
        <p>Pink</p>
        //Rectangle
        <p>Purple</p>
        <div className="bottombar">
          <BottomBar/>
        </div>
      </div>
    )
  }
}

export default Colour;
