import React from "react";
import styled from "styled-components";
import Image from "./images/mona-wall.jpg";
import { Simulator } from "./components";

const SectionOne = styled.div`
  height: 100vh;
`;

const FrontPage: React.SFC = () => {
  return (
    <SectionOne style={{ backgroundImage: `url(${Image})` }}>
      <Simulator />
    </SectionOne>
  );
};

export default FrontPage;
