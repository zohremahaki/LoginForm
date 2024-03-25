import React from "react";
import { StyledButton } from "./UiStyled.ts";

const Button = (props) => {
  return (
    <StyledButton
      type={props.type | "submit"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
