import "../styles/Documentation.module.css";

export const Documentation = () => {
  return (
    <>
      <header className="documentation-header">
        <div className="title">
          <span>
            <h1>Asiimov UI / Docs </h1>
          </span>
        </div>
        <div className="subtitle">
          <a
            href="https://github.com/sushilburagute/asiimov-css"
            className="link"
          >
            Github Source
          </a>
        </div>
      </header>
      <div className="body">
        <div className="sidenav">
          <h3>Getting Started</h3>
          <h3>Components</h3>
        </div>
        <div className="content">
          <h3>This is Content</h3>
        </div>
      </div>
    </>
  );
};
