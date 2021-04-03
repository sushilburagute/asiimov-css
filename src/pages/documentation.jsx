import { Content } from "../components/Content";
import { Sidenav } from "./../components/sidenav";
import { HeaderDocs } from "./../components/header-docs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const routes = [
  {
    path: "/documentation",
    exact: true,
    content: () => <h1>Home of docs in Content</h1>,
  },
  {
    path: "/documentation/installation",
    exact: true,
    content: () => <h1>Home of installation in Content</h1>,
  },
  {
    path: "/documentation/whats-new",
    exact: true,
    content: () => <h1>Home of whats-new in Content</h1>,
  },
];

const DocHome = () => {
  return <h1>Home of docs in Content</h1>;
};

const Installation = () => {
  return <h1>Home of Installation in Content</h1>;
};

const WhatsNew = () => {
  return <h1>Home of WhatsNew in Content</h1>;
};

export const Documentation = () => {
  return (
    <Router>
      <HeaderDocs />
      <div className="body">
        <Sidenav />
        {/* <Content /> */}
        <div className="content">
          <Switch>
            {/* <>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.content />}
                />
              ))}
            </> */}
            <Route exact path="/documentation" component={DocHome} />
            <Route
              path="/documentation/installation"
              component={Installation}
              exact
            />
            <Route path="/documentation/whats-new" component={WhatsNew} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
