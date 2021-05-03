import './App.css';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar/Calendar';
import {BrowserRouter as Router , Switch ,
Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
<Navbar />
<Switch>
  <Route path='/'>
  
  </Route>
  <Route path='/calendar'>
    <Calendar />
  </Route>
</Switch>
</Router>
    </>
  );
}

export default App;
