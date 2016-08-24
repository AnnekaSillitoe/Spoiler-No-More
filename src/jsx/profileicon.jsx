import React from 'react';

class ProfileIcon extends React.Component{
  render(){
    return (
      <svg
        className="profile-icon"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100">
        <path
          fill={this.props.palette.profile}
          d="M75,30.1C75.6,16.2,64.4,5,50,5S24.4,16.2,25,30.1c0.6,13.9,11.8,25.1,25,25.1  S74.4,43.9,75,30.1z M12.5,77.1c0-9.9,8-17.9,17.9-17.9h39.2c9.9,0,17.9,8,17.9,17.9V95h-75V77.1z"/>
      </svg>

    )
  }
}

export default ProfileIcon;
