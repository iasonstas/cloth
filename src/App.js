import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATSPAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      {/* The moment switch sees smthing(path) match- It renders only that and stops */}
      <Switch>
        <Route exact path="/" component={Homepage} />{" "}
        {/* Exact={true} or false It means the path we see exactly. Dont stop at the first*/}
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
