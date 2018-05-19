import React, { Component } from 'react';
import './App.css';
import Login from './Login/LoginForm';
import Home from './Home/Home';
import AdminHome from './AdminHome/AdminHome';
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  render() { //render method for the componenet
    return ( //JSX

      <div className="App">
          <Router>
            <div>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/adminHome" component={AdminHome} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
