import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Error 404: Coordinates Not Found</h1>
      <p className="not-found__text">
        "Captain, we seem to have encountered a spatial anomaly. The requested
        location is beyond our current star charts."
      </p>
      <Link to="/" className="not-found__link">
        Return to Starfleet Command
      </Link>
    </div>
  );
}
export default NotFoundPage;
