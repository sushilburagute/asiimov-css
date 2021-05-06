import { useState } from "react";

export const Toasts = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Toast</h1>
      <p className="subheading">
        Toasts are used to show alert or information to users.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Toast Notifcations</h3>
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
            <div class="toast">
              <h2 class="text text text subheading">Your Changes are Saved</h2>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
