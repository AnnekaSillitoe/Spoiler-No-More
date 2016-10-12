import React from 'react';

class ReplyIcon extends React.Component{
  render(){
    return (
      <svg
        className = "reply-icon"
        height="100"
        width="100"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill={this.props.palette.reply}
          d="M384 160l-384 288 384 288v-192c111 0 329 61 384 280 0-291-196-451-384-472v-192z" />
      </svg>
    )
  }
}

export default ReplyIcon;
