import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';
import TopSliderNoLinks from './topslidernolinks.jsx';
import ListOfLists from './listoflists.jsx';
import { Link } from 'react-router';

class RetweetNotifications extends React.Component{
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
      return <ListOfLists listData={e} key={i}/>
    });

    return (
      <div>
          <TopBar/>
            <div className="colour-top-text">
              <button className="arrow-button"><Link to='/settings'>
                  <i className="material-icons back-arrow">keyboard_arrow_left</i>
              </Link></button>
              <p className="select-colour-text">Select who you would like to turn retweets off for:</p>
            </div>
            <TopSliderNoLinks/>
              <div className="timeout-list">
                {listsowned}
              </div>
            <BottomBar/>
      </div>
    )
  }
}

export default RetweetNotifications;
