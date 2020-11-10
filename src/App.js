import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HookTest from './pages/hooks';
import RefTest from './pages/ref';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HookTest}/>
        <Route path='/ref' component={RefTest}/>
		</Router>  
    </div>
  );
}

export default App;
