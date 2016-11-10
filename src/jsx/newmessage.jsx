import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

class NewMessage extends React.Component{

  render(){
    return (
      <div>
        <TopBar/>
            <div>
                <div className="profile-box">
                  <div className="profile-heading">
                    <div className="to-box">
                      <span className="to">To:</span><textarea maxLength="140" className="to-text-box" placeholder="Type username here..."></textarea>
                    </div>
                    <button className="close-message"><Link to="home">
                      <i className="material-icons close-icon">close</i>
                    </Link></button>
                  </div>
                </div>
                <div className="middle-bar">
                </div>
            <textarea maxLength="140" className="new-message-text-box" placeholder="Type message here..."></textarea>
            <i className="material-icons send-icon">send</i>
            </div>
          <BottomBar/>
      </div>
    )
  }
}

export default NewMessage;
