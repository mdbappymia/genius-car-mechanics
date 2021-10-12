import React from "react";
import { Col } from "react-bootstrap";

const Expart = ({ expart }) => {
  const { name, expartlized, img } = expart;
  return (
    <Col lg={3} md={6}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-warning">{expartlized}</h5>
    </Col>
  );
};

export default Expart;
