export const HeaderDocs = ({ updateState }) => {
  return (
    <header className="documentation-header">
      <div className="title">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="header-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={updateState}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <span>
            <h1 className="logo">Asiimov UI / Docs </h1>
          </span>
        </div>
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
  );
};
