import React from 'react';
import { Link } from 'react-router';

const querystring = require('querystring');

class TopSliderLists extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      createNewList: false,
      list: {}
    };
    this.createList = this.createList.bind(this);
  }

  createList() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({editable: false});
      }
    }.bind(this);
    xhr.open('POST', '/createlists');
    xhr.send(querystring.stringify(this.state.list));
  }

  updateValue(event) {
    this.setState({profile: Object.assign(this.state.profile, {name: event.target.value})})
    if (event.keyCode === 13) {
      this.createList();
    }
  }

  render(){
    return (
      <div className="top-slider">
        <button className="lists-following"><Link to="/lists">Lists</Link></button>
        <button className="lists-button" onClick={()=>this.setState({createNewList: true})}><i className="material-icons add-new-list">add_circle</i></button>
        <button className="lists-following"><Link to="/following">Following</Link></button>
      </div>
    )
  }
}

function newList() {
  if (this.state.editable) {
    return <input className="list-name" type="text" onKeyUp={this.updateValue}></input>
  }
};

export default TopSliderLists;
