import React from 'react';

class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timeoutDisplay: false
        }
    }

  render(){
    return (
          <div className={this.props.className}>
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked/>
              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
          </div>
    )
  }
}

export default Toggle;
