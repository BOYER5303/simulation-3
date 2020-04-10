//import React, {Component} from 'react';
import {Switch, Route} from "../node_modules/react-router-dom";
import Dashboard from "./Components/Dashboard";
import Wizard from "./Components/Wizard";
import React from 'react';




export default <Switch>
          <Route exact path="/" component= {Dashboard}/>
          <Route path="/wizard" component = {Wizard}/>
    </Switch>

 
