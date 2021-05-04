import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar/Calendar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
          </Route>
         
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
