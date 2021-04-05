import { useState } from "react";

export const Image = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Image</h1>
      <p className="subheading">
        Documentation and examples for opting images into responsive behavior.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Responsive Image</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setCodeToggle(!codeToggle);
            }}
          >
            {codeToggle ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {codeToggle ? (
            <code>
              {`<img class="responsive-image" src="https://via.placeholder.com/150" alt="" />`}
            </code>
          ) : (
            <img
              src="https://via.placeholder.com/200"
              class="responsive-image"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Rounded Image</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setCodeToggle(!codeToggle);
            }}
          >
            {codeToggle ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {codeToggle ? (
            <code>
              {`<img class="responsive-image rounded-image" src="https://via.placeholder.com/150" alt="" />`}
            </code>
          ) : (
            <img
              src="https://via.placeholder.com/200"
              class="responsive-image rounded-image"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
