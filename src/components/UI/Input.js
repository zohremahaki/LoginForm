import React from "react";
import { StyledInput } from "./UiStyled.ts";

const Input = (props) => {
  return (
    <StyledInput
      $valid={props.$valid}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></StyledInput>
  );
};

export default Input;
