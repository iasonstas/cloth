import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      {/* The moment switch sees smthing(path) match- It renders only that and stops */}
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        {/* Exact={true} or false It means the path we see exactly. Dont stop at the first*/}
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
