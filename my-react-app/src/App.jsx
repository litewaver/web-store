import React from 'react';
import NavBar from './NavBar';
import './App.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <h1>Welcome to Your Ecommerce Store</h1>
        <p>Scroll down to see the navbar change!</p>
      </div>
    </div>
  );
}

export default App;

