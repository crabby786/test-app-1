import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark">
      <header className="mx-auto w-50">
        <img src={logo} className=" img-thumbnail" style = {{width:'120px'}} alt="logo" />
        <p className='text-primary' >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
