import React from "react";
import Data from "../components/Data"
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";

function Home() {
  return (
    <div>
      <div>All Products</div>
      <Data/>
    </div>
  );
}

export default Home;
