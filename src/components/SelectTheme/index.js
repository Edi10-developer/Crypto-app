import React, { useState } from "react";
import { Container } from "./styles";
import themeToggle from "../img/themeToggleSelect.png";

const SelectTheme = (props) => {
  return (
    <Container onClick={props.changeTheme}>
      <img src={themeToggle} alt="Select Theme" />
    </Container>
  );
};
export default SelectTheme;
