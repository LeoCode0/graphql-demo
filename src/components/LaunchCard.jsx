import React, { useState, useEffect } from "react";

import "../css/launch-card.css";

export const LaunchCard = ({
  links,
  id,
  details,
  launch_success,
  mission_name,
  launch_site,
  launch_year,
  rocket,
}) => {
  const [styles, setStyles] = useState("full");

  useEffect(() => {
    if (details) {
      setStyles("");
    }
  }, []);

  return (
    <div className={`launch ${styles}`}>
      <div className={`launch--info ${styles}`}>
        <div className="launch--header">
          <div className="launch--id">
            <span>{id}</span>
          </div>
          {links.flickr_images[0] ? (
            <img src={links.flickr_images[0]} alt={rocket.rocket_name} />
          ) : (
            <div className="launch-image-unavailable">
              <p>No rocket image available</p>
            </div>
          )}
          {launch_success ? (
            <div className="launch--status launch-success">
              <span>Success</span>
            </div>
          ) : (
            <div className="launch--status launch-failed">
              <span>Failed</span>
            </div>
          )}
        </div>
        <div className="launch--body">
          <div className="launch--title">
            <h2>{mission_name}</h2>
          </div>
          <p>Ubication: {launch_site.site_name_long}</p>
          <p>Year: {launch_year}</p>
        </div>
        <div className="launch--footer">
          <h3>{rocket.rocket_name}</h3>
          <span>{rocket.rocket_type}</span>
        </div>
      </div>
      {details && (
        <div className="launch--description">
          <div className="launch--details">
            <p>{details}</p>
          </div>
          <a href={links.article_link} target="__blank">
            See article
          </a>
          <a href={links.video_link} target="__blank">
            See video
          </a>
        </div>
      )}
    </div>
  );
};
