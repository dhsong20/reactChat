import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

function PrivateRoute({ component: Component, ...rest}) {
  const {currentUser} = useContext(AuthContext)
  // console.log(currentUser)
  // console.log(!!currentUser)

  // if currentUser is not null, load protected component with original props 
  // if currentUser is null, access is denied, so load /login path
  return (
    <Route 
      {...rest}
      render={props => (
        !!currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      )}
    
    
    />
  )
}

export default PrivateRoute;