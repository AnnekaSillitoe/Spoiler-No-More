import React from 'react';

class TimeoutOn extends React.Component {
    render() {
        let timedOut = this.props.active ? "is-following" : "not-following";
        let notTimedOut = this.props.active ? "not-following" : "is-following";

        return (
            <button className="following-button" onClick={this.props.timeoutState}>
                <i className={"material-icons following-user-icon " + timedOut}>check_box</i>
                <i className={"material-icons following-user-icon grey " + notTimedOut}>check_box</i>
            </button>
        );
    }
}

export default TimeoutOn;