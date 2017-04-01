import React from 'react';
import TimeoutOn from "../helpers/timeouton.jsx";

class FriendTimeout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timeout: false
        };
        this.timeoutState = this.timeoutState.bind(this);
    }

    timeoutState() {
        this.setState({
            timeout: !this.state.timeout
        });
    }

    render(){
        return (
            <div className="account-box">
                <div className="image-square">
                    <img src={this.props.friendData.profile_image} height="150px" width="150px"/>
                </div>
                <div className="user-text">
                    <p className="username">{this.props.friendData.name}</p>
                    <p className="at-username">@{this.props.friendData.screen_name}</p>
                </div>
                <div className="profile-text">
                    <p className="following-user-text">{this.props.friendData.description}</p>
                    <TimeoutOn timeoutState={this.timeoutState} active={this.state.timeout}/>
                </div>
            </div>
        )
    }
}

export default FriendTimeout;