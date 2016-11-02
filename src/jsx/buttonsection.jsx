import React from 'react';
import { Link } from 'react-router';

const querystring = require('querystring');

class ButtonSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.favorited,
    };
    this.favouriteATweet = this.favouriteATweet.bind(this);
  }

  favouriteATweet() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({favorited: true});
      }
    }.bind(this);
    xhr.open('POST', '/favouritetweet');
    xhr.send(querystring.stringify({tweetId: this.props.tweetId}));
  }

  unfavouriteATweet() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({favorited: false});
      }
    }.bind(this);
    xhr.open('POST', '/unfavouritetweet');
    xhr.send(querystring.stringify({tweetId: this.props.tweetId}));
  }

  render(){
    console.log(this.state);
    return (
      <div className = "button-section">
          <button className = "button-icon-box">
            <i className="material-icons repeat-icon">reply</i>
          </button>
          <button className = "button-icon-box">
            <i className="material-icons repeat-icon">repeat</i>
          </button>
          {favouritedTweet.call(this)}
      </div>
    )
  }
}

function favouritedTweet () {
  var colour;
  var onClick;
  if (this.state.favorited) {
    colour = "red";
    onClick = function() {
      this.setState({favorited: false});
      this.unfavouriteATweet();
    }.bind(this);
  } else {
    colour = "grey";
    onClick = function () {
      this.setState({favorited: true})
      this.favouriteATweet();
    }.bind(this);
  }
  return(
    <button className = "button-icon-box">
      <i className={"material-icons repeat-icon " + colour} onClick={onClick}>favorite</i>
    </button>
  )
};

export default ButtonSection;
