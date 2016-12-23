import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

const querystring = require('querystring');

class ReplyTweet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dms: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          dms: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/dms");
    xhr.send();
  }

  render(){


    return (
      <div>
        <TopBar/>
            <div>
                <div className="profile-box">
                  <div className="profile-heading">

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

export default ReplyTweet;
