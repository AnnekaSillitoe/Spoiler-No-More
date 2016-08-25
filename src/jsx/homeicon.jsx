import React from 'react';

class HomeIcon extends React.Component{
  render(){
    return (
      <svg
      className="home-icon"
      	 xmlns="http://www.w3.org/2000/svg"
      	 width="512"
      	 height="512"
         viewBox="0 0 512 512"
      	 version="1.1"
      	 id="svg2" >
      	<g transform="translate(0,448)">
      		<path
      			 fill={this.props.palette.home}
      			 fillOpacity="1"
      			 stroke={this.props.palette.home}
      			 strokeWidth="12"
      			 strokeLinecap="butt"
      			 strokeLinejoin="round"
      			 strokeMiterlimit="4"
      			 strokeOpacity="1"
      			 strokeDasharray="none"
      			 d="m 16,256 240,-192 96,72 0,-32 48,0 0,72 96,80 -48,0 0,192 -120,0 0,-160 -96,0 0,160 -168,0 0,-192 z"
      			 transform="translate(0,-448)"/>
      	</g>
      </svg>
    )
  }
}

export default HomeIcon;
