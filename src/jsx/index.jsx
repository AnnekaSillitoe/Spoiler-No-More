import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from './home.jsx';
import Login from './login.jsx'

const routes = (
  <Route path='/'>
    <IndexRoute component={ Home }/>
    <Route path='/login'component = { Login }/>
  </Route>
)

ReactDOM.render(
  <Router history={ hashHistory }>
    { routes }
  </Router>, document.getElementById('content')
);
