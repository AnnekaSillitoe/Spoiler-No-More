import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';

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
        <div className="top-text">
          <p className="select-account">Drafts</p>
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
