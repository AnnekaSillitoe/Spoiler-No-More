import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Login from './login.jsx';
import Home from './home.jsx';
import Display from './display.jsx';
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
import Drafts from './drafts.jsx';
import Block from './block.jsx';
import RetweetNotifications from './retweetnotifications.jsx';
import NewMessage from './newmessage.jsx';
import ReplyTweet from './replytweet.jsx';
import TimeoutFollowing from './timeoutfollowing.jsx';
import TurnOnRTs from './turnonrts.jsx';

const routes =
  <Route path='/'>
    <IndexRoute component={ Login }/>
    <Route path='/login'component = { Login }/>
    <Route path='/home'component = { Home }/>
    <Route path='/display'component = { Display }/>
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
    <Route path="/drafts" component = { Drafts }/>
    <Route path="/block" component = { Block }/>
    <Route path='/retweetnotifications' component = { RetweetNotifications }/>
    <Route path="/newmessage" component = { NewMessage }/>
    <Route path="/reply" component = { ReplyTweet }/>
    <Route path='/liststimeout'component = { Timeout }/>
    <Route path='/followingtimeout'component = { TimeoutFollowing }/>
    <Route path="/turnonrts" component = { TurnOnRTs }/>
  </Route>


ReactDOM.render(
  <Router history={ hashHistory }>
    { routes }
  </Router>, document.getElementById('content')
);
