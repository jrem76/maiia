import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Basket } from './features/basket/Basket'
import { BasketDetails } from './features/basket/BasketDetails'
import { ProductsTable } from './features/products/ProductsTable'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Basket />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <ProductsTable />
            </Route>
            <Route path="/basket">
              <BasketDetails />
            </Route>
          </Switch>
        </main>
      </div>
      
    </Router>
  );
}

export default App;
