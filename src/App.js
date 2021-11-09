import "./App.css";

import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import DogPage from "./components/DogPage";

function App() {
  document.body.style.margin = '0';
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dogs">
          <DogPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
