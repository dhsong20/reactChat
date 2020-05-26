import React from 'react';
import firebase from '../../firebase'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut()}></button>
    </div>
  )
}

function signOut() {
  firebase.auth().signOut()
}

export default Home