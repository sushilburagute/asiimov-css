import { NavLink } from "react-router-dom";

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
    name: "ToastNotifcations",
  },
];

export const Sidenav = () => {
  return (
    <div className="sidenav">
      <h3 className="sidenav-heading">Getting Started</h3>
      <ul className="list">
        <li className="sidenav-stacked-list">
          <NavLink
            exact
            to="/documentation"
            activeClassName="sidenav-navlink-selected"
            className="sidenav-navlink"
          >
            Documentation
          </NavLink>
        </li>
        <li className="sidenav-stacked-list">
          <NavLink
            to="/documentation/whats-new"
            activeClassName="sidenav-navlink-selected"
            className="sidenav-navlink"
          >
            What's new
          </NavLink>
        </li>
      </ul>
      <h3 className="sidenav-heading">Components</h3>
      <ul className="list">
        {sidebarItems.map(({ name }) => (
          <li className="sidenav-stacked-list" key={name}>
            <NavLink
              to={`/documentation/${name}`}
              activeClassName="sidenav-navlink-selected"
              className="sidenav-navlink"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <h3 className="sidenav-heading">🚀 Made by Sushil Buragute</h3>
      <h5 className="sidenav-heading">Got some feedback? Tweet me!</h5>
    </div>
  );
};
