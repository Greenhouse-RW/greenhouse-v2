import './App.css';
import Navbar from './components/Navbar';
import Condition from './components/Conditions'
import {BrowserRouter as Router , Switch ,
Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
<Navbar />
<Condition/>
<Switch>
  <Route path='/' />
</Switch>
</Router>
    </>
  );
}

export default App;
