import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderNoLinks from './topslidernolinks.jsx';
import TimeoutLists from './timeoutlists.jsx';

class Timeout extends React.Component{
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
      return <TimeoutLists listData={e} key={i}/>
    });


    return (
      <div>
        <TopBar/>
        <div className="top-text top-text-timeout">
          <p className="select-account-timeout select-account">Who would you like to timeout:</p>
          <TopSliderNoLinks/>
        </div>
          <div className="timeout-list">
            {listsowned}
          </div>
        <BottomBar/>
      </div>
    )
  }
}

export default Timeout;
