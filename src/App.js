import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ShopPage from "./pages/shop";

import HomePage from "./pages/homepage";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
