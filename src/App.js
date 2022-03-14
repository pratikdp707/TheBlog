
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserState from './context/user/UserState';
import { getCookie } from './helpers/auth';
import { useState } from 'react';

function App() {


  return (
    <>
    <UserState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/details/:id"><PostDetail /></Route>
          <Route exact path="/create"><CreatePost/></Route>
          <Route exact path='/update/:id'><UpdatePost/></Route>
          <Route exact path="/signin"><Signin/></Route>
          <Route exact path="/signup"><Signup/></Route>
        </Switch>
      </Router>
      </UserState>
    </>
  );
}

export default App;
