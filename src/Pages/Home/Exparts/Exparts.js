import React from "react";
import { Container, Row } from "react-bootstrap";

import mechanic1 from "../../../images/exparts/1.jpeg";
import mechanic2 from "../../../images/exparts/2.jpeg";
import mechanic3 from "../../../images/exparts/3.jpeg";
import mechanic4 from "../../../images/exparts/4.jpeg";
import Expart from "../Expart/Expart";

const exparts = [
  {
    img: mechanic1,
    name: "Tamim Iqbal",
    expartlized: "Opening car Batting",
  },
  {
    img: mechanic2,
    name: "Micle Anderson",
    expartlized: "Changing car small tools",
  },
  {
    img: mechanic3,
    name: "Robert koly",
    expartlized: "Washing car",
  },
  {
    img: mechanic4,
    name: "Shakib henry",
    expartlized: "All rounder",
  },
];
const Exparts = () => {
  return (
    <Container>
      <h2 className="text-primary mt-5">Our Exparts</h2>
      <Row>
        {exparts.map((expart) => (
          <Expart key={expart.img} expart={expart}></Expart>
        ))}
      </Row>
    </Container>
  );
};

export default Exparts;
