import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component{
  render(){
    return (
      <Link to="/login">Hello</Link>
    )
  }
}

export default Home;
