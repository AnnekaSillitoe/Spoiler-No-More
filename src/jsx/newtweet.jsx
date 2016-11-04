import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import { Link } from 'react-router';

const querystring = require('querystring');

class NewTweet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
    };
    this.updateTweet = this.updateTweet.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateTweet() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({tweet: ''});
        this.context.router.push('/home');
      }
    }.bind(this);
    xhr.open('POST', '/sendtweet');
    console.log(this.state.tweet);
    xhr.send(querystring.stringify(this.state.tweet));
  }

  updateValue(value, event) {
    var update = {};
    update[value] = event.target.value;
    this.setState({tweet: Object.assign(this.state.tweet, update)})
  }

  render(){
    function editableTweet() {
      return <textarea className="new-tweet-text-box" placeholder="Type your tweet here..." onKeyUp={this.updateValue.bind(null, "tweet")}></textarea>
    };

    return (
      <div>
        <TopBar/>
            <div>
                <div className="profile-box">
                  <div className="profile-heading">
                    {editableTweet.call(this)}
                    <button className="close"><Link to="home">
                      <i className="material-icons close-icon">close</i>
                    </Link></button>
                  </div>
                  <div className="tweet-buttons">
                    <button className="draft">
                      <p className="draft-text">Save as Draft</p>
                    </button>
                    <button className="send" onClick={this.updateTweet}>
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

NewTweet.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NewTweet;
