import React from 'react'
import Navbar from './navbar/Navbar';
import './app.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registration from './registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
