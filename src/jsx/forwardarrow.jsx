import React from 'react';

class ForwardArrow extends React.Component{
  render(){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22">
        <defs id="defs3051">
          <style type="text/css" id="current-color-scheme">
            </style>
        </defs>
       <path
         fill={this.props.palette.forwardarrow}
         fillOpacity="1"
         stroke="none"
         d="m7.707031 3l-.707031.707031 6.125 6.125 1.167969 1.167969-1.167969 1.167969-6.125 6.125.707031.707031 6.125-6.125 1.875-1.875-1.875-1.875-6.125-6.125"
         class="ColorScheme-Text"
          />
      </svg>
    )
  }
}

export default ForwardArrow;
