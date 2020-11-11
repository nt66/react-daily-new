import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HookTest from './pages/hooks';
import RefTest from './pages/ref';
import ProtalsTest from './pages/protals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HookTest}/>
        <Route path='/ref' component={RefTest}/>
        <Route path='/protals' component={ProtalsTest}/>
		</Router>  
    </div>
  );
}

export default App;
