import { useState } from "react";

export const Avatars = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Avatars</h1>
      <p className="subheading">Avatars are user profile pictures.</p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Avatar icons</h3>
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
              {`<img class="avatar avatar-small" src="https://via.placeholder.com/150" alt="" />`}
              <br />
              {` <img class="avatar avatar-medium" src="https://via.placeholder.com/150" alt="" />`}
              <br />
              {`<img class="avatar avatar-large" src="https://via.placeholder.com/150" alt="" />`}
            </code>
          ) : (
            <>
              <img
                class="avatar avatar-small"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <img
                class="avatar avatar-medium"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <img
                class="avatar avatar-large"
                src="https://via.placeholder.com/150"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
