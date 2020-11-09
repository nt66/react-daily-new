import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HookTest from './pages/hooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HookTest}/>
        {/* <Route path='/UserInfoPage' component={UserInfoPage}/> */}
		</Router>  
    </div>
  );
}

export default App;
