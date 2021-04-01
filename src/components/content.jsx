export const Content = () => {
  return (
    <div className="content">
      <h1>Installation</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Component Name</h3>
          <button className="button-toggle">Show Code</button>
        </div>
        <div className="snippet-code">
          <iframe
            title="code"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=nord&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
