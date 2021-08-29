
import './App.css';
import React , { useState } from 'react';
import { Route , withRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Message from './components/message/Message';

function App() {

  const[username , setUsername] = useState('');

  const getUsernameHandler = ( username) => {
    setUsername(username);

  }
  
  return (
    <div>
      <Route exact path = "/message">
        <Message username = {username} />
      </Route>
      <Route exact path = "/">
        <Landing onPassUsername = {getUsernameHandler} /> 
      </Route>
    </div>

  );
}

export default withRouter(App) ;
