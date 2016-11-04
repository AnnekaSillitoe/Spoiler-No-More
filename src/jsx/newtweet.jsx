import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

class NewTweet extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
            <div>
                <div className="profile-box">
                  <div className="profile-heading">
                    <textarea className="new-tweet-text-box" defaultValue="Type your tweet here..."></textarea>
                    <button className="close"><Link to="home">
                      <i className="material-icons close-icon">close</i>
                    </Link></button>
                  </div>
                  <div className="tweet-buttons">
                    <button className="draft">
                      <p className="draft-text">Save as Draft</p>
                    </button>
                    <button className="send">
                      <p className="send-text">Send</p>
                    </button>
                  </div>
                  <div className="mid-bar">
                  </div>
                </div>
            </div>
          <BottomBar/>
      </div>
    )
  }
}

export default NewTweet;
