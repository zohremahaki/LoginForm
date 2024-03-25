import React from "react";
import { StyledHeading } from "./UiStyled.ts";

const Header = (props) => {
  return <StyledHeading>{props.children}</StyledHeading>;
};

export default Header;
