import { AppBar } from "@mui/material";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GetDogs from "./components/GetDogs";
import Home from "./components/Home";

function App() {
  document.body.style.margin = '0';
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/test">
          <GetDogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
