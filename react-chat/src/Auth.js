import React, { useEffect, useState } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    })
  }, [])

  if (pending) {
    return (
      <p>Loading...</p>
    )
  } else {
    return(
      <AuthContext.Provider
        value={{ currentUser }}
      >

        {children}

      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;