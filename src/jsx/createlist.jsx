import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';

const querystring = require('querystring');

class CreateLists extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listName: ""
    };
    this.updateValue = this.updateValue.bind(this);
    this.createAList = this.createAList.bind(this);
  }

  createAList() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({listName: ""});
        this.context.router.push('/lists');
      }
    }.bind(this);
    xhr.open('POST', '/createlists');
    xhr.send(querystring.stringify(this.state));
  }

  updateValue(event) {
    this.setState({listName: event.target.value})
  }

  render(){
    return (
      <div>
        <TopBar/>
        <div className="top-text">
          <p className="select-account">What would you like to name your new list?</p>
        </div>
        <div className="lists-box">
          <input className="profile-username text-box lists-text-box" type="text" defaultValue="Enter a name" onKeyUp={this.updateValue}></input>
        </div>
        <button className="submit-middle-button" onClick={this.createAList}>
          <i className={"material-icons submit-icon"}>check</i>
        </button>
        <BottomBar/>
      </div>
    )
  }
}

CreateLists.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CreateLists;
