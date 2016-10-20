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
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/664807873713725440/r8ZAg5lD.jpg" height="150px" width="150px"></img>
          </div>
          <button className="account-text"><Link to={"/listmembers/" + e.id + '/' + e.slug}>{e.name}</Link></button>
        </div>
      )
    });


    return (
      <div>
        <TopBar/>
        <TopSliderLists/>
          <div className="friends-list">
            {listsowned}
          </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Lists;
