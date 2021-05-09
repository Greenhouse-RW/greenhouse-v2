import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar/Calendar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Calendar/Main";
import { Data } from "./components/EnvironmentData/Data";

function App() {
  return (
    <div className="wrapper relative">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/calendar">
            <Main />
          </Route>
          <Route path="/reports">
            <Data />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
