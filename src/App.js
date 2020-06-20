import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MultipleClick from "./pages/MultipleClick.js";
import NotFound from "./pages/404.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/multiple-click">Multiple Click</Link>
        </header>
        <Switch>
          <Route path="/multiple-click" component={MultipleClick} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
