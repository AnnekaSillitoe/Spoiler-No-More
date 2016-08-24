import React from 'react';

class SpeechIcon extends React.Component{
  render(){
    return (
      <svg
        className="speech-icon"
        version="1.1"
        id="レイヤー_1"
        xmlns="http://www.w3.org/2000/svg"
        width="128px"
        height="128px"
        viewBox="0 0 128 128"
        enableBackground="new 0 0 128 128">
      <g>
      	<path
          fill={this.props.palette.speech}
          d="M20.79,126.61V96.9h-6.38c-8.43,0-13.46-5.04-13.46-13.47V14.01c0-7.07,5.91-12.61,13.46-12.61h99.18
      		c7.67,0,13.46,5.42,13.46,12.61v69.43c0,8.18-5.28,13.47-13.46,13.47H51L20.79,126.61z"/>
          <path
            fill={this.props.palette.speech}
            d="M14.41,8.48c-3.17,0-6.37,1.9-6.37,5.52v69.43c0,4.53,1.85,6.37,6.37,6.37h13.47v19.88L48.1,89.81h65.49
        		c4.29,0,6.37-2.09,6.37-6.37V14.01c0-3.62-3.2-5.52-6.37-5.52H14.41z"/>
      </g>
      </svg>
    )
  }
}

export default SpeechIcon;
