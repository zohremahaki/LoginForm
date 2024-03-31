import React from "react";
import { StyledHeading } from "./UiStyled.styled.tsx";

interface HeaderProbs {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProbs> = (props) => {
  return <StyledHeading>{props.children}</StyledHeading>;
};

export default Header;
