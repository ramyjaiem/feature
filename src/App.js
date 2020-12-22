import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import AllModal from "./components/AllModal";
import USModal from "./components/USModal";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/AllContacts">
            <AllModal />
          </Route>
          <Route path="/USContacts">
            <USModal />
          </Route>
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
