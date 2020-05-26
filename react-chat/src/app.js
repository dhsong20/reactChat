import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AuthProvider from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>

          <PrivateRoute exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App; 