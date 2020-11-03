import React from 'react';
import { Basket } from './features/basket/Basket';
import { ProductsTable } from './features/products/ProductsTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Basket />
      </header>
      <main>
        <ProductsTable />
      </main>
    </div>
  );
}

export default App;
