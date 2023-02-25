import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterClient from './Register';

const ListClients = (props:any) => { 
  // todo use client list table comp
  return (
    <h1>ListUsers</h1>
  )
 }

export  function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/listClients">List clients</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <RegisterClient />
          </Route>
          <Route path="/listClients">
            <ListClients />
          </Route>
          <Route path="/" exact = {true} >
            <RegisterClient />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div >
      <Navigation />
    </div>
  );
}

export default App;
