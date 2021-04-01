import { useState } from "react";

export const Content = ({ title, description, component }) => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div className="content">
      <h1>Installation</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Component Name</h3>
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
            </code>
          ) : (
            <img
              class="avatar avatar-small"
              src="https://via.placeholder.com/150"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};