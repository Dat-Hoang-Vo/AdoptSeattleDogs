import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import DogPage from "./components/DogPage";

function App() {
  document.body.style.margin = '0';
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dogs">
          <DogPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
