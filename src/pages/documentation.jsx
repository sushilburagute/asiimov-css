import { Content } from "./../components/content";
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

            <Route path="/documentation/installation">
              <Installation />
            </Route>
            <Route path="/documentation/whats-new">
              <WhatsNew />
            </Route>
            <Route exact path="/documentation">
              <DocHome />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
