import React from 'react';
import firebase from '../../firebase'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </div>
  )
}


export default Home