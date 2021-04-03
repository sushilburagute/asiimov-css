import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const sidebarItems = [
  {
    name: "Avatars",
  },
  {
    name: "Alert",
  },
  {
    name: "Badges",
  },
  {
    name: "Buttons",
  },
  {
    name: "Cards",
  },
  {
    name: "Image",
  },
  {
    name: "Input",
  },
  {
    name: "Lists",
  },
  {
    name: "Modal",
  },
  {
    name: "Typograhy",
  },
  {
    name: "Toast Notifcations",
  },
];

export const Sidenav = () => {
  return (
    <div className="sidenav">
      <h3 className="sidenav-heading">Getting Started</h3>
      <ul className="list">
        <li className="sidenav-stacked-list-selected">
          <Link to="/documentation/installation">Installation</Link>
        </li>
        <li className="sidenav-stacked-list">
          <Link to="/documentation/whats-new">What's new</Link>
        </li>
      </ul>
      <h3 className="sidenav-heading">Components</h3>
      <ul className="list">
        {sidebarItems.map((items, key) => (
          <li className="sidenav-stacked-list" key={items.name}>
            {items.name}
          </li>
        ))}
      </ul>
      <h3 className="sidenav-heading">🚀 Made by Sushil Buragute</h3>
      <h5 className="sidenav-heading">Got some feedback? Tweet me!</h5>
    </div>
  );
};
