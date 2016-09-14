import React from 'react';
import TopBar from './topbar.jsx';
import BottomBar from './bottombar.jsx';

class Accounts extends React.Component{
  render(){
    return (
      <div>
        <TopBar/>
        <div className="top-text">
          <p className="select-colour">Select which account you'd like to sign in with:</p>
        </div>
        <div className="account-box">
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/664807873713725440/r8ZAg5lD.jpg" height="150px" width="150px"></img>
          </div>
          <button className="account-text">@Basketball2016</button>
        </div>
        <div className="account-box">
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/668655568601546752/HGPdOQrB.png" height="150px" width="150px"></img>
          </div>
          <button className="account-text">@WWE</button>
        </div>
        <div className="account-box">
          <div className="image-square">
            <img src="https://pbs.twimg.com/profile_images/574499541212270592/FpXDipiC.jpeg" height="150px" width="150px"></img>
          </div>
          <button className="account-text">@FormulaOneLover</button>
        </div>
          <BottomBar/>
      </div>
    )
  }
}

export default Accounts;
