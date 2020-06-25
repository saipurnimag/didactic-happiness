import React from 'react';
import './App.css';
import Navbar from './Components/NavigationBar';
import { Router, Route } from 'react-router';
import Home from './Components/Home';
import Prescription from './Components/Prescription';


function App() {
  return (
    <div className="App">
    
      <Navbar />
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/prescription" component={Prescription} />
        </Router>
    </div>
  );
}

export default App;
