import React from 'react';

class SearchIcon extends React.Component{
  render(){
    return (
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="490"
        height="490"
        viewBox="0 0 490 490"
        >
      <path
        fill="none"
        stroke={this.props.palette.search}
        strokeWidth="36"
        strokeLinecap="round"
        d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/>
      </svg>
    )
  }
}

export default SearchIcon;
