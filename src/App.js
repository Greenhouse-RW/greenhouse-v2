import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar/Calendar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Calendar/Main";

function App() {
  return (
    <div className="wrapper relative">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/calendar">
            <Main />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
