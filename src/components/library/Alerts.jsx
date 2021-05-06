import { useState } from "react";

export const Alerts = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Alerts</h1>
      <p className="subheading">
        Provide contextual feedback messages for typical user actions with the
        handful of available and flexible alert messages.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Alerts</h3>
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
              {`<div class="alert alert-success">Success Alert!</div>`} <br />
              {`<div class="alert alert-error">Error Alert!</div>`}
              <br />
              {`<div class="alert alert-warning">Warning Alert!</div>`}
              <br />
              {`<div class="alert alert-primary">Primary Alert!</div>`}
              <br />
              {`<div class="alert alert-secondary">Secondary Alert!</div>`}
              <br />
            </code>
          ) : (
            <>
              <div class="alert alert-success">Success Alert!</div>
              <div class="alert alert-error">Error Alert!</div>
              <div class="alert alert-warning">Warning Alert!</div>
              <div class="alert alert-primary">Primary Alert!</div>
              <div class="alert alert-secondary">Secondary Alert!</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
