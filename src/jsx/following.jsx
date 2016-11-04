import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderLists from './topsliderlists.jsx';
import Friend from './friend.jsx';

class Following extends React.Component{
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
        <Friend friendData={e} key={i}/>
      )
    })

    return (
      <div>
          <TopBar/>
          <TopSliderLists/>
        <div className="friends-list">
          {friendslist}
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Following;
