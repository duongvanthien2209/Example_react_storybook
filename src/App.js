import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Example from './components/Example';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
