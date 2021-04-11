import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Documentation } from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/documentation" component={Documentation} />
      </Switch>
    </Router>
  );
}

export default App;
