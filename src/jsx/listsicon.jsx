import React from 'react';

class ListsIcon extends React.Component{
  render(){
    return (
      <svg
        className="lists-icon"
      	 xmlns="http://www.w3.org/2000/svg"
      	 width="24px"
      	 height="24px"
      	 viewBox="0 0 24 24"
         fill={this.props.palette.list} >
      		<path
      			 id="bottom_dot" d="M5,10H4c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1h1c0.552,0,1-0.447,1-1v-1C6,10.447,5.552,10,5,10z"
      			/>
      		<path id="middle_dot" d="M5,17H4c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1h1c0.552,0,1-0.447,1-1v-1C6,17.447,5.552,17,5,17z"
      			/>
      		<path id="top_dot" d="M5,3H4C3.448,3,3,3.447,3,4v1c0,0.553,0.448,1,1,1h1c0.552,0,1-0.447,1-1V4C6,3.447,5.552,3,5,3z"/>
      		<path id="bottom_line" d="M20,17H9c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1h11c0.552,0,1-0.447,1-1v-1
      			C21,17.447,20.552,17,20,17z"/>
      		<path id="middle_line" d="M20,10H9c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1h11c0.552,0,1-0.447,1-1v-1
      			C21,10.447,20.552,10,20,10z"/>
      		<path id="top_line" d="M20,3H9C8.448,3,8,3.447,8,4v1c0,0.553,0.448,1,1,1h11c0.552,0,1-0.447,1-1V4C21,3.447,20.552,3,20,3z"/>
      </svg>
    )
  }
}

export default ListsIcon;
