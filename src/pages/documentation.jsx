import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidenav } from "./../components/sidenav";
import { HeaderDocs } from "./../components/header-docs";
import { useState } from "react";
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
  DocumentationHome,
} from "../components/library/index";

export const Documentation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const updateState = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };

  return (
    <Router>
      <HeaderDocs updateState={updateState} pageInfo={"Docs"} />
      <div
        className="body"
        style={
          showSidebar
            ? { display: "flex", position: "relative" }
            : { display: "grid", width: "100vw", height: "100vh" }
        }
      >
        <Sidenav showSidenav={showSidebar} />
        <div
          className="content"
          style={showSidebar ? { width: "100vw", height: "90vh" } : {}}
        >
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
            <Route exact path="/documentation" component={DocumentationHome} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
