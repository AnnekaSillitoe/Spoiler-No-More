import React from 'react';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class TimeoutLists extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="account-box">
                <button className="list-text list-text-timeout"><Link to={"/listmembers/" + this.props.listData.id + '/' + this.props.listData.slug}>{this.props.listData.name}</Link></button>
                <button className="following-button">
                    <i className="material-icons following-user-icon">check_box</i>
                </button>
            </div>
        )}
};

export default TimeoutLists;
