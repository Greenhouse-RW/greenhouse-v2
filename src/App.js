
import './App.css';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Calendar/Main";
import { Data } from "./components/EnvironmentData/Data";
import Signin from "./components/Signin/Signin";
import Condition from "./components/Env_conditions/Conditions"
import Signup from './components/Signup/signup';
import Settings from './components/Settings/Settings'
import LandingPage from './components/LandingPage/LandingPage';
import Feedback from './Feedback/Feedback';


function App() {
  return (
    <div className="wrapper relative">
      <BrowserRouter> 
      
        <Switch>
        <Route path="/settings">
        <Navbar /> 
            <Settings />
          </Route>
          <Route path="/feedback">
          <Navbar /> 
            <Feedback />
          </Route>
        <Route path="/condition">
        <Navbar /> 
        <Condition /> 
        </Route>
        <Route path="/signup">
          <Signup/>  
          </Route>
        <Route path="/signin">
          <Signin  /> 
          </Route>
          <Route path="/calendar">
          <Navbar /> 
            <Main /> 
          </Route>
          <Route path="/control">
          <Navbar /> 
            <Data /> 
          </Route>
          <Route path="/home">
          <Navbar /> 
          <Homepage /> 
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
