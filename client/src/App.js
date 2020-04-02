import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AdminPage from './pages/adminpage/adminpage.component';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/admin' component={AdminPage} />
      </Switch>
    </div>
  );
}

export default App;
