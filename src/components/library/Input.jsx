import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "toggleTextbox":
      return { ...state, toggleTextbox: !state.toggleTextbox };
    case "toggleTextboxWarning":
      return {
        ...state,
        toggleTextboxWarning: !state.toggleTextboxWarning,
      };
    case "toggleTextboxDisabled":
      return {
        ...state,
        toggleTextboxDisabled: !state.toggleTextboxDisabled,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  toggleTextbox: false,
  toggleTextboxWarning: false,
  toggleTextboxDisabled: false,
};

export const Input = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
              dispatch({ type: "toggleTextbox" }, state);
            }}
          >
            {state.toggleTextbox ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {state.toggleTextbox ? (
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
              dispatch({ type: "toggleTextboxWarning" }, state);
            }}
          >
            {state.toggleTextboxWarning ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {state.toggleTextboxWarning ? (
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
              dispatch({ type: "toggleTextboxDisabled" }, state);
            }}
          >
            {state.toggleTextboxDisabled ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {state.toggleTextboxDisabled ? (
            <code>{`<input type="text" class="textbox textbox-disabled" />`}</code>
          ) : (
            <input type="text" class="textbox textbox-disabled" />
          )}
        </div>
      </div>
    </div>
  );
};
