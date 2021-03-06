import { useState } from "react";

export const Lists = () => {
  const [showSpacedList, setShowSpacedList] = useState(false);
  const [showStackedList, setShowStackedList] = useState(false);
  return (
    <div>
      <h1>Lists</h1>
      <p className="subheading">
        List flexible for displaying series of content.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Spaced Lists</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setShowSpacedList(!showSpacedList);
            }}
          >
            {showSpacedList ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showSpacedList ? (
            <code>
              {`<ul>`} <br />
              {`<li class="spaced-list">List Item 1</li>`} <br />
              {`<li class="spaced-list">List Item 1</li>`} <br />
              {`<li class="spaced-list">List Item 1</li>`} <br />
              {`</ul>`} <br />
            </code>
          ) : (
            <ul>
              <li class="spaced-list">List Item 1</li>
              <li class="spaced-list">List Item 2</li>
              <li class="spaced-list">List Item 3</li>
            </ul>
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Stacked Lists</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setShowStackedList(!showStackedList);
            }}
          >
            {showStackedList ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showStackedList ? (
            <code>
              {`<ul>`} <br />
              {`<li class="stacked-list">List Item 1</li>`} <br />
              {`<li class="stacked-list">List Item 1</li>`} <br />
              {`<li class="stacked-list">List Item 1</li>`} <br />
              {`</ul>`} <br />
            </code>
          ) : (
            <ul>
              <li class="stacked-list">List Item 1</li>
              <li class="stacked-list">List Item 2</li>
              <li class="stacked-list">List Item 3</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
