import React, { useCallback } from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';

function SignUp({ history }) {

  const handleSignUp = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      history.push("/")
    } catch (error) {
      console.log("error with signing up new user: ", error)
    }

  }, [history])

  return(
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="email..."/>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="password..."/>
        </label>
        <input type="submit">Sign up</input>
      </form>
    </div>

  )

}

export default withRouter(SignUp);
