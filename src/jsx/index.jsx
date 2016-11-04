import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Login from './login.jsx';
import Home from './home.jsx';
import Colour from './colour.jsx';
import Accounts from './accounts.jsx';
import Profile from './profile.jsx';
import Lists from './lists.jsx';
import Following from './following.jsx';
import Messages from './messages.jsx';
import Notifications from './notifications.jsx';
import ListMembers from './listmembers.jsx';
import CreateLists from './createlist.jsx';
import Settings from './settings.jsx';
import NewTweet from './newtweet.jsx';
import Timeout from './timeout.jsx';

const routes =
  <Route path='/'>
    <IndexRoute component={ Login }/>
    <Route path='/login'component = { Login }/>
    <Route path='/home'component = { Home }/>
    <Route path='/display'component = { Colour }/>
    <Route path='/accounts'component = { Accounts }/>
    <Route path='/lists'component = { Lists }/>
    <Route path='/following'component = { Following }/>
    <Route path='/messages'component = { Messages }/>
    <Route path='/notifications'component = { Notifications }/>
    <Route path='/profile'component = { Profile }/>
    <Route path="listmembers/:id/:slug" component = { ListMembers }/>
    <Route path="/createnewlist" component = { CreateLists }/>
    <Route path="/settings" component = { Settings }/>
    <Route path="/newtweet" component = { NewTweet }/>
    <Route path="/timeout" component = { Timeout }/>
  </Route>


ReactDOM.render(
  <Router history={ hashHistory }>
    { routes }
  </Router>, document.getElementById('content')
);
