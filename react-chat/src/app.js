import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../components/home/index';
import Login from './components/login/index';
import SignUp from './components/signUp/index';


function app() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="signup" component={SignUp} />
      </div>
    </Router>
  )
}

export default app; 