import React from "react";
import { StyledErrorText } from "./UiStyled.ts";

const ErrorText = (props) => {
  return <StyledErrorText>‍{props.children}</StyledErrorText>;
};

export default ErrorText;
