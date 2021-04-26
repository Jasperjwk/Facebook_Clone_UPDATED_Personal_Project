import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProivder';
import Widgets from './Widgets';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...

    // As soon as the app loads, we attach this listener
    // If we log in, it fires off this code
    // If we log out, it fires off this code
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
      <Login/> 
      ): (
        <>
        <Header/>

        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
      </>
      )}
    </div>
  );
}

export default App;
