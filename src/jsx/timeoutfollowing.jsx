import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderNoLinks from './topslidernolinks.jsx';
import FriendTimeout from './friendtimeout.jsx';
import TimeoutLists from './timeoutlists.jsx';

class TimeoutFollowing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }

    componentWillMount() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    friends: JSON.parse(xhr.response)
                });
            }
        }.bind(this);
        xhr.open('GET', '/friendsid');
        xhr.send();
    }


    render(){
        var friendslist = this.state.friends.map((e, i) => {
            return (
                <FriendTimeout friendData={e} key={i}/>
            )
        });

        return (
            <div>
                <TopBar/>
                <div className="top-text top-text-timeout">
                    <p className="select-account-timeout select-account">Who would you like to timeout:</p>
                    <TopSliderNoLinks/>
                </div>
                <div className="timeout-list">
                    {friendslist}
                </div>
                    {TimeoutLists}
                <BottomBar/>
            </div>
        )
    }
};

export default TimeoutFollowing;