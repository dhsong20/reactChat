import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  )
}

export default App; 