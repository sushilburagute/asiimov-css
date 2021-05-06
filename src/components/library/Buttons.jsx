import { useState } from "react";

export const Buttons = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Buttons</h1>
      <p className="subheading">
        Button styles for actions in forms, dialogs, and more
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Buttons</h3>
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
              {`<button class="button button-primary">Primary Button</button>`}
              <br />
              {`<button class="button button-secondary">Secondary Button</button>`}
              <br />
              {`<button class="button button-icon"> Button with Icon </button>`}
            </code>
          ) : (
            <>
              <button class="button button-primary">Primary Button</button>
              <button class="button button-secondary">Secondary Button</button>
              <button class="button button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Button with Icon
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
