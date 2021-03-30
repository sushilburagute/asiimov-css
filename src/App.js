import "./styles/App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Documentation } from "./pages/documentation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
