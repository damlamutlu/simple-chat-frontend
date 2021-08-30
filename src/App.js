
import './App.css';
import React , { useState } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Message from './components/message/Message';

function App() {

  const[user , setUsername] = useState();

  const getUsernameHandler = ( user) => {
    setUsername(user);

  }
  
  return (
    <div>
      <Route exact path = "/message">
        <Message user = {user} />
      </Route>
      <Route exact path = "/">
        <Landing onPassUsername = {getUsernameHandler} /> 
      </Route>
    </div>

  );
}

export default App ;
