import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import Tweets from './tweets.jsx';

class HomeTimeout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timeline: []
        }
    }

    componentWillMount() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    timeline: JSON.parse(xhr.response)
                })
            }
        }.bind(this);
        xhr.open('GET', '/returndata');
        xhr.send();
    };

    render(){
        var tl = this.state.timeline.map((e, i) => {
            return <Tweets tweetData={e} key={i}/>
        });

        return (
            <div>
                <TopBar/>
                <div className="home-timeline">
                    {tl}
                </div>
                <BottomBar/>
            </div>
        )
    }
}

export default HomeTimeout;