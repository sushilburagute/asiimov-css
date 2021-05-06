import { Link } from "react-router-dom";
import { HeaderDocs } from "./../components/index";

export const About = () => {
  return (
    <>
      <HeaderDocs pageInfo={"About"} />
      <div className="content">
        <h1 className="heading">Story Behind Asiimov UI</h1>
        <br />
        <h4 classname="subheading">📌 What problem does this solve?</h4>
        <p className="paragrahy">
          Building a design system from the ground up for every project is
          exhausting. Asiimov UI contains pre-built basic UI elements to help
          speed up your development.
        </p>
        <br />
        <h4 classname="subheading">
          📌 Writing CSS for the same components isn't efficient.
        </h4>
        <p className="paragrahy">
          Your developer's time is precious. The time they could spend on
          writing functional code is taken up writing styles for components.
        </p>
        <br />
        <h4 classname="subheading">
          📌 Asiimov UI isn't a framework-specific library.
        </h4>
        <p className="paragrahy">
          Asiimov UI provides a collection of professionally designed, every day
          UI components built on a framework-agnostic technology ie. it isn't
          dependent on any framework. Every component is written in vanilla CSS.
        </p>
        <br />
        <h4 classname="subheading">💻 Misc</h4>
        <p className="paragrahy">
          <Link to="/documentation" className="link">
            View the Documentation
          </Link>
        </p>
        <a href="https://sushilburagute.github.io/" className="link">
          Visit my Portfolio
        </a>
        <br />
      </div>
    </>
  );
};
