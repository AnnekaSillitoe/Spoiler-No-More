import React from 'react';

class BackArrow extends React.Component{
  render(){
    return (
      <svg
        className="back-arrow"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        fill={this.props.palette.backarrow}
        viewBox="0 0 24 24">
       <path
          fillOpacity="1"
          stroke="none"
          d="m14.292969 3l-6.125 6.125-1.875 1.875 1.875 1.875 6.125 6.125.707031-.707031-6.125-6.125-1.167969-1.167969 1.167969-1.167969 6.125-6.125-.707031-.707031"
          />
      </svg>
    )
  }
}

export default BackArrow;
