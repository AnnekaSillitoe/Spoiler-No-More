import React from 'react';

class MessageIcon extends React.Component{
  render(){
    return (
      <svg
        className="message-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        fill={this.props.palette.messages}>
       <path
          fill={this.props.palette.messages}
          fillOpacity="1"
          stroke="none"
          d="M 1 3 L 1 4 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 21 19 L 21 18.414062 L 21 18 L 21 17 L 21 3 L 20.951172 3 L 20 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 8.0234375 9.9765625 L 2 16 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 19.951172 4 L 20 4 L 20 16 L 13.976562 9.9765625 L 19.951172 4 z M 8.7304688 10.683594 L 11 12.951172 L 13.269531 10.683594 L 19.537109 16.951172 L 20 17.414062 L 20 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 z "/>
      </svg>
    )
  }
}

export default MessageIcon;
