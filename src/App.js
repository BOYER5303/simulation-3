//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header';
//import Wizard from './Components/Wizard';
//import Dashboard from './Components/Dashboard';
import routes from './routes';
import {HashRouter as Router} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Header/>
      {routes}
    </div>
    </Router>
  );
}
}
export default App;
