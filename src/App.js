import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop/hats" component={HatsPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
