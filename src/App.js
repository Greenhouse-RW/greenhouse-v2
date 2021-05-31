
import './App.css';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar/Calendar";
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Calendar/Main";
import { Data } from "./components/EnvironmentData/Data";
import Signin from "./components/Signin/Signin";
import Condition from "../src/components/Conditions"
import Signup from './components/Signup/signup';

function App() {
  return (
    <div className="wrapper relative">
      <BrowserRouter>
        <Navbar />   
        <Switch>
        <Route path="/condition">
        <Condition/>
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
          <Route path="/reports">
            <Data />
          </Route>
          <Route path="/">
          <Homepage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
