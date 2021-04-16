import { useState } from "react";

export const Badges = () => {
  const [showProfileBadges, setShowProfileBadges] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
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
              setShowProfileBadges(!showProfileBadges);
            }}
          >
            {showProfileBadges ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showProfileBadges ? (
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
              setShowBadges(!showBadges);
            }}
          >
            {showBadges ? "View Component" : "View Code"}
          </button>
        </div>
        <div className="snippet-code">
          {showBadges ? (
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
