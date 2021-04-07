// import heroImage from "../../../public/images/docs-home-image.jpg";

export const DocumentationHome = () => {
  return (
    <div>
      <img
        src={window.location.origin + "/images/docs-home-image.jpg"}
        alt="hero"
        className="responsive-image"
      />
      <h1 className="heading">Hey! Welcome to Asiimov UI 👋</h1>
      <p className="subheading">
        A set of small, responsive CSS modules that you can use in every web
        project.
      </p>

      <p className="subheading">
        Asiimov UI is ridiculously tiny. The entire set of modules clocks in at
        6KB. Crafted with mobile devices in mind, it was important to us to keep
        our file sizes small, and every line of CSS was carefully considered. If
        you decide to only use a subset of these modules, you'll save even more
        bytes.
      </p>
    </div>
  );
};
