import React from "react";
import { StyledLabel } from "./UiStyled.ts";

const Label = (props) => {
  return (
    <StyledLabel $valid={props.$valid} htmlFor={props.htmlFor}>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
