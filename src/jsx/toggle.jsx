import React from 'react';

class Toggle extends React.Component{
  render(){
    return (
      <div>
        <div className="onoffswitch">
          <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked/>
            <label className="onoffswitch-label" for="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
            </label>
        </div>
      </div>
    )
  }
}

export default Toggle;
