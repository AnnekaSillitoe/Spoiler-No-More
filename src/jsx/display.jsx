import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

class Display extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
        <div className="colour-top-text">
          <button className="arrow-button"><Link to='/settings'>
              <i className="material-icons back-arrow">keyboard_arrow_left</i>
          </Link></button>
          <p className="select-colour-text">Select which colour you’d like to use:</p>
        </div>
        <div className="blue-box">
          <div className="blue-square"></div>
          <button className="colour-text">Blue</button>
        </div>
        <div className="green-box">
          <div className="green-square"></div>
          <button className="colour-text">Green</button>
        </div>
        <div className="pink-box">
          <div className="pink-square"></div>
          <button className="colour-text">Pink</button>
        </div>
        <div className="purple-box">
          <div className="purple-square"></div>
          <button className="colour-text">Purple</button>
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Display;
