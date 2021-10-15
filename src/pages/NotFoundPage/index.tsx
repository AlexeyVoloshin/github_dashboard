import React from "react";
import { Link } from "react-router-dom";
export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <p>Page Not Found</p>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};
