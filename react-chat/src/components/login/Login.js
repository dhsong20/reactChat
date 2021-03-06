import React, { useCallback, useContext } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth'
import firebase from '../../firebase';

function Login({ history }) {

  async function handleLogin(event) {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      history.push("/")
    } catch(error) {
      alert(error)
    }

  }

  const { currentUser } = useContext(AuthContext)
  
  if (currentUser) {
    return <Redirect to="/" />
  } 
  return (
    <div className="homeWrapper">
      
      <div className="authenticationWrapper">
        <h1>Hello!</h1>
        <h2>Log in for a personalized message</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="email..."></input>
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="password..."></input>
          </label>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
