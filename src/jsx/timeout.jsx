import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderLists from './topsliderlists.jsx';
import Lists from './lists.jsx';
import { Link } from 'react-router';

class Timeout extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
        <div className="top-text">
          <p className="select-account">Who would you like to timeout:</p>
        </div>
        <TopSliderLists/>
        <Lists/>
        <BottomBar/>
      </div>
    )
  }
}

export default Timeout;
