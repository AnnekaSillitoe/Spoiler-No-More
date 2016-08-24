import React from 'react';

class TimeoutIcon extends React.Component{
  render(){
    return (
      <svg
        className = "timeout-icon"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="17px"
        height="16.001px"
        viewBox="0 0 17 16.001"
        enableBackground="new 0 0 17 16.001">
      <g>
        <path
          fill={this.props.palette.timeout}
          d="M9,2c3.313,0,6,2.686,6,6s-2.687,6-6,6s-6-2.686-6-6S5.687,2,9,2 M9,0C4.589,0,1,3.589,1,8s3.589,8,8,8 s8-3.589,8-8S13.411,0,9,0L9,0z"/>
        </g>
      <polyline
        fill="none"
        stroke={this.props.palette.timeout}
        strokeWidth="2"
        strokeMiterlimit="10"
        points="9,2.946 9,7.811 12.293,11.054 "/>
      </svg>
    )
  }
}

export default TimeoutIcon;
