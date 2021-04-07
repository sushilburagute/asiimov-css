import { useState } from "react";

export const Image = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  const [codeToggle2, setCodeToggle2] = useState(false);
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
              src="https://images.unsplash.com/photo-1615069433711-41e14f250182?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
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
              setCodeToggle2(!codeToggle2);
            }}
          >
            {codeToggle2 ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {codeToggle2 ? (
            <code>
              {`<img class="responsive-image rounded-image" src="https://via.placeholder.com/150" alt="" />`}
            </code>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1518415692216-ce36b914890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              class="responsive-image rounded-image"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
