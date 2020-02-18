import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import ShopPage from "./pages/shop";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Sign from "./components/sign";

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={Sign}/>
        </Switch>
    </div>
  );
}

export default App;
