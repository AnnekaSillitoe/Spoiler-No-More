import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from './home.jsx';
import Login from './login.jsx';
import Colour from './colour.jsx';
import Accounts from './accounts.jsx';
import Lists from './lists.jsx';
import Following from './following.jsx';
import Messages from './messages.jsx';

const routes = (
  <Route path='/'>
    <IndexRoute component={ Login }/>
    <Route path='/login'component = { Login }/>
    <Route path='/display'component = { Colour }/>
    <Route path='/accounts'component = { Accounts }/>
    <Route path='/lists'component = { Lists }/>
    <Route path='/following'component = { Following }/>
    <Route path='/messages'component = { Messages }/>
  </Route>
)

ReactDOM.render(
  <Router history={ hashHistory }>
    { routes }
  </Router>, document.getElementById('content')
);
