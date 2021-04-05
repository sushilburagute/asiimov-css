import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidenav } from "./../components/sidenav";
import { HeaderDocs } from "./../components/header-docs";
import {
  Alerts,
  Avatars,
  Badges,
  Buttons,
  Cards,
  Image,
  Input,
  Lists,
  Modal,
  Typograhy,
  Toasts,
  WhatsNew,
} from "../components/library/index";

const DocHome = () => {
  return <h1>Home of docs in Content</h1>;
};

export const Documentation = () => {
  return (
    <Router>
      <HeaderDocs />
      <div className="body">
        <Sidenav />
        <div className="content">
          <Switch>
            <Route exact path="/documentation/whats-new" component={WhatsNew} />
            <Route exact path="/documentation/Avatars" component={Avatars} />
            <Route exact path="/documentation/Alert" component={Alerts} />
            <Route exact path="/documentation/Badges" component={Badges} />
            <Route exact path="/documentation/Buttons" component={Buttons} />
            <Route exact path="/documentation/Cards" component={Cards} />
            <Route exact path="/documentation/Image" component={Image} />
            <Route exact path="/documentation/Input" component={Input} />
            <Route exact path="/documentation/Lists" component={Lists} />
            <Route exact path="/documentation/Modal" component={Modal} />
            <Route exact path="/documentation/Toasts" component={Toasts} />
            <Route
              exact
              path="/documentation/Typograhy"
              component={Typograhy}
            />
            <Route exact path="/documentation" component={DocHome} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
