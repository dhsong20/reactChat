import React from 'react';
import logo from '../../images/logo.svg';
import '../../css/styles.css';
import firebase from '../../firebase';

function login() {
  return (
    <div className="homeWrapper">
      
      <div className="authenticationWrapper">
        <h1>Hello!</h1>
        <div className="authenticationInput">

          <input className="inputEMAIL" type="email" placeholder="email..."></input>
          <input className="inputPW" type="password" placeholder="password..."></input>

        </div>

        <div className="authenticationActions">  

          <button>Sign Up</button>
          <button>Login</button>
        
        </div>
        


      </div>
    </div>
  );
}

export default login;
