import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import RegisterClient from './Register';

const ListClients = (props: any) => {
  // todo use client list table comp
  return (
    <h1>ListUsers</h1>
  )
}

export function Navigation() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            {/* NavLinks */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="active" to="/" className="nav-link" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/listClients" className="nav-link">List Clients</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/register" className="nav-link">Add New</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/register">
            <RegisterClient />
          </Route>
          <Route path="/listClients">
            <ListClients />
          </Route>
          <Route path="/" exact={true} >
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
