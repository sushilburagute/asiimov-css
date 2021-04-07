import { useState } from "react";

export const Input = () => {
  const [codeToggle, setCodeToggle] = useState(false);
  const [codeToggle2, setCodeToggle2] = useState(false);
  const [codeToggle3, setCodeToggle3] = useState(false);
  return (
    <div>
      <h1>Input</h1>
      <p className="subheading">
        Input fields are the most way of taking user input.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Textbox</h3>
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
            <code>{`<input type="text" class="textbox" />`}</code>
          ) : (
            <input type="text" class="textbox" />
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Textbox Warning</h3>
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
            <code>{`<input type="text" class="textbox textbox-warning" />`}</code>
          ) : (
            <input type="text" class="textbox textbox-warning" />
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Textbox Disabled</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setCodeToggle3(!codeToggle3);
            }}
          >
            {codeToggle3 ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {codeToggle3 ? (
            <code>{`<input type="text" class="textbox textbox-disabled" />`}</code>
          ) : (
            <input type="text" class="textbox textbox-disabled" />
          )}
        </div>
      </div>
    </div>
  );
};
