import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HookTest from './pages/hooks';
import RefTest from './pages/ref';
import ProtalsTest from './pages/protals';
import Es6Module from './pages/es6module';
import Generater from './pages/generater';
import Asyncawait from './pages/asyncawait';
import Ajax from './pages/ajax';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HookTest}/>
        <Route path='/ref' component={RefTest}/>
        <Route path='/protals' component={ProtalsTest}/>
        <Route path='/es6module' component={Es6Module}/>
        <Route path='/generater' component={Generater}/>
        <Route path='/asyncawait' component={Asyncawait}/>
        <Route path='/ajax' component={Ajax}/>
		</Router>  
    </div>
  );
}

export default App;
