import React from 'react';

class FriendTimeout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="account-box">
                <div className="image-square">
                    <img src={this.props.friendData.profile_image} height="150px" width="150px"></img>
                </div>
                <div className="user-text">
                    <p className="username">{this.props.friendData.name}</p>
                    <p className="at-username">@{this.props.friendData.screen_name}</p>
                </div>
                <div className="profile-text">
                    <p className="following-user-text">{this.props.friendData.description}</p>
                    <button className="following-button">
                        <i className={"material-icons following-user-icon "}>check_box</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default FriendTimeout;