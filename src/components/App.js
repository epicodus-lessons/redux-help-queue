import React from "react";
import Header from "./Header";
import NewTicketControl from "./NewTicketControl";
import Signin from "./Signin";
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <NewTicketControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;