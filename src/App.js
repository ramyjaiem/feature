import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import ModalContent from "./components/ModalContent";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/AllContacts">
            <ModalContent type="all" name ="All Contacts"  even/>
          </Route>
          <Route path="/USContacts">
            <ModalContent type="us" name ="US Contacts" />
          </Route>
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
