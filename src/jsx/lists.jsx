import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderLists from './topsliderlists.jsx';
import { Link } from 'react-router';

class Lists extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          lists: JSON.parse(xhr.response)
        });
      }
    }.bind(this);
    xhr.open("GET", "/listsowned");
    xhr.send();
  }

  render(){
    var listsowned = this.state.lists.map((e, i) => {
      return (
        <div key={i} className="account-box">
          <button className="list-text"><Link to={"/listmembers/" + e.id + '/' + e.slug}>{e.name}</Link></button>
        </div>
      )
    });


    return (
      <div>
        <TopBar/>
        <TopSliderLists/>
        <button className="lists-button" onClick={()=>this.setState({createNewList: true})}><i className="material-icons add-new-list">add_circle</i></button>
          <div className="lists-list">
            {listsowned}
          </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Lists;
