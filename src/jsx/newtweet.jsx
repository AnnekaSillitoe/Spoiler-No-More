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
    this.saveDraftTweet = this.saveDraftTweet.bind(this);
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
    xhr.send(querystring.stringify(this.state));
  }

  updateValue(value, event) {
    this.setState({tweet: event.target.value})
  }

  saveDraftTweet() {
    if(localStorage.getItem('draftTweet')){
      var draftArr = JSON.parse(localStorage.getItem('draftTweet'));
      draftArr.push(this.state.tweet);
      localStorage.setItem('draftTweet', JSON.stringify(draftArr));
      this.context.router.push('/home');
    } else {
      var draft = [];
      draft.push(this.state.tweet);
      localStorage.setItem('draftTweet', JSON.stringify(draft));
      this.context.router.push('/home');
    }
  }

  render(){
    function editableTweet() {
      return <textarea maxLength="140" className="new-tweet-text-box" placeholder="Type your tweet here..." onKeyUp={this.updateValue.bind(null, "tweet")}></textarea>
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
                      <p className="draft-text"onClick={this.saveDraftTweet}>Save as Draft</p>
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
