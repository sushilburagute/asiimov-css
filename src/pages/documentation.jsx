import { Content } from "./../components/content";
import { Sidenav } from "./../components/sidenav";
import { HeaderDocs } from "./../components/header-docs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Documentation = () => {
  return (
    <>
      <Router>
        <HeaderDocs />
        <div className="body">
          <Sidenav />
          <Content />
        </div>
      </Router>
    </>
  );
};
