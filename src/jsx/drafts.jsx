import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

class Drafts extends React.Component{

  returnTweets() {
    var returnedTweet = JSON.parse(localStorage.getItem('draftTweet'))
    if (returnedTweet) {
      return returnedTweet.map(function (e, i) {
        return (
        <div key={i} className="drafts-box">
            <p className="drafts-draft-text">{e}</p>
        </div>
      )
      });
    }
  }

  render(){
    return (
      <div>
        <TopBar/>
        <div className="drafts-top-text">
          <button className="arrow-button drafts-arrow-button"><Link to='/settings'>
              <i className="material-icons back-arrow">keyboard_arrow_left</i>
          </Link></button>
        <p className="drafts-text">Drafts</p>
        </div>
        <div className="drafts-timeline">
          {this.returnTweets()}
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Drafts;
