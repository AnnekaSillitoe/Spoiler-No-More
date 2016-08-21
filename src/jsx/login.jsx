import React from 'react';
import TwitterLogo from './twitterlogo.jsx';

class Login extends React.Component{
  render(){
    return (
      <div>
        <h1>Spoiler No-More</h1>
        <TwitterLogo palette={{twitter: 'rgba(174,133,200,1)'}}/>
        <button>Sign in with Twitter</button>
      </div>
    )
  }
}

export default Login;
