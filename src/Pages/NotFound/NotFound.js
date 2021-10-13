import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/home">
        <img
          className="w-100"
          src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48305.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default NotFound;
