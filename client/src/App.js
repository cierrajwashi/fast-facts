import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import SubmitStatements from "./components/submitStatements";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Episode from "./components/episode/Episode";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={SubmitStatements} />
        <Route exact path="/episode" component={Episode} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
