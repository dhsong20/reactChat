import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../../css/styles.css';
import firebase from '../../firebase';

function Login() {
  return (
    <div className="homeWrapper">
      
      <div className="authenticationWrapper">
        <h1>Hello!</h1>
        <div className="authenticationInput">

          <input className="inputEMAIL" type="email" placeholder="email..."></input>
          <input className="inputPW" type="password" placeholder="password..."></input>

        </div>

        <div className="authenticationActions">  

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <button>Login</button>
        
        </div>
        


      </div>
    </div>
  );
}

export default Login;
