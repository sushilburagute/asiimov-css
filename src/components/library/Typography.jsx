import { useState } from "react";

export const Typograhy = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div>
      <h1>Typograhy</h1>
      <p className="subheading">
        Text utilities are used for text alignment, styles and overflow things.
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
              {`<h1 class="text heading">Heading</h1>`} <br />
              {`<h3 class="text subheading">Subheading</h3>`} <br />
              {`<h6 class="text text text samll-text">Small text</h6>`} <br />
              {`<p class="text text text grey-text">Grey Text</p>`} <br />
            </code>
          ) : (
            <>
              <h1 class="text heading">Heading</h1>
              <h3 class="text subheading">Subheading</h3>
              <h6 class="text text text samll-text">Small text</h6>
              <p class="text text text grey-text">Grey Text</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
