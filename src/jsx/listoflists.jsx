import React from 'react';
import convertTime from '../helpers/converttime.js';
import ButtonSection from './buttonsection.jsx';
import { Link } from 'react-router';

class ListOfLists extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="account-box">
        <button className="list-text"><Link to={"/listmembers/" + this.props.listData.id + '/' + this.props.listData.slug}>{this.props.listData.name}</Link></button>
      </div>
    )}
  };

export default ListOfLists;
