import { useState } from "react";

export const Cards = () => {
  const [showCardText, setShowCardText] = useState(false);
  const [showCardImage, setShowCardImage] = useState(false);

  return (
    <div>
      <h1>Cards</h1>
      <p className="subheading">Cards are flexible content containers.</p>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Text-Only Cards</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setShowCardText(!showCardText);
            }}
          >
            {showCardText ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showCardText ? (
            <code>
              {`<div class="card">`} <br />
              {`<h1 class="text heading">Card Heading</h1>`} <br />
              {`<h4 class="text subheading">Card Subheading</h4>`} <br />
              {`<p class="paragrahy">`} <br />
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit`} <br />
              {`</p>`} <br />
              {`</div>`} <br />
            </code>
          ) : (
            <div class="card">
              <h1 class="text heading">Card Heading</h1>
              <h4 class="text subheading">Card Subheading</h4>
              <p class="paragrahy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="snippet">
        <div className="snippet-heading">
          <h3>Card with an Image</h3>
          <button
            className="button-toggle"
            onClick={() => {
              setShowCardImage(!showCardImage);
            }}
          >
            {showCardImage ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showCardImage ? (
            <code>
              {`<div class="card">`} <br />
              {`<div class="card-image-wrapper"></div>`} <br />
              {`<h1 class="text heading">Card Heading</h1>`} <br />
              {`<h4 class="text subheading">Card Subheading</h4>`} <br />
              {`<p class="paragrahy">`} <br />
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit`} <br />
              {`</p>`} <br />
              {`</div>`} <br />
            </code>
          ) : (
            <div class="card">
              <div class="card-image-wrapper"></div>
              <h1 class="text text heading">Card Heading</h1>
              <h4 class="text text subheading">Card Subheading</h4>
              <p class="paragrahy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
