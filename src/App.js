
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Calendar/Main";
import { Data } from "./components/EnvironmentData/Data";
import Signin from "./components/Signin/Signin";
import Condition from "./components/Env_conditions/Conditions"
import Signup from './components/Signup/signup';
import Support from './components/Support/Support';
import Settings from './components/Settings/Settings'
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="wrapper relative">
      <BrowserRouter>
        <Navbar />   
      
        <Switch>
        <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
        <Route path="/condition">
        <Condition />
        </Route>
        <Route path="/signup">
          <Signup/>
          </Route>
        <Route path="/signin">
          <Signin  />
          </Route>
          <Route path="/calendar">
            <Main />
          </Route>
          <Route path="/control">
            <Data />
          </Route>
          <Route path="/">
          <Homepage/>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
