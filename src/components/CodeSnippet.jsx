import { useState } from "react";

export const CodeSnippet = ({ title, componentCode }) => {
  const [codeToggle, setCodeToggle] = useState(false);
  return (
    <div className="snippet">
      <div className="snippet-heading">
        <h3>{title}</h3>
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
        {codeToggle ? <code>{componentCode}</code> : <>{componentCode}</>}
      </div>
    </div>
  );
};
