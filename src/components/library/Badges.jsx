import { useState } from "react";

export const Badges = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  const [codeToggle2, setCodeToggle2] = useState(false);
  return (
    <div>
      <h1>Badges</h1>
      <p className="subheading">
        Badges are often used as unread indicators or as tags.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Badges on Profile</h3>
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
              {`<div class="badge-avatar"> <img src="https://via.placeholder.com/150" /> <div class="badge-green"></div> </div>`}
            </code>
          ) : (
            <>
              <div class="badge-avatar">
                <img src="https://via.placeholder.com/150" alt="" />
                <div class="badge-green"></div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Default Badges</h3>
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
              {`<div class="badge-pill button badge-pill-primary">Primary Pill</div>`}
              <br />
              {`<div class="badge-pill button badge-pill-secondary">Secondary Pill</div>`}
            </code>
          ) : (
            <>
              <div class="badge-pill  badge-pill-primary">Primary Pill</div>
              <div class="badge-pill badge-pill-secondary">Secondary Pill</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
