import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2 className="mt-3">{name?.toUpperCase()}</h2>
      <h5>Price: {price}</h5>
      <p>{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-primary mb-3">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
