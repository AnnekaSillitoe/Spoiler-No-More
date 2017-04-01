import React from 'react';
import { Link } from 'react-router';
import TimeoutOn from "../helpers/timeouton.jsx";

class TimeoutLists extends React.Component{
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
                <button className="list-text list-text-timeout"><Link to={"/listmembers/" + this.props.listData.id + '/' + this.props.listData.slug}>{this.props.listData.name}</Link></button>
                <TimeoutOn timeoutState={this.timeoutState} active={this.state.timeout}/>
            </div>
        )}
};

export default TimeoutLists;
