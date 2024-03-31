import React from "react";
import { StyledErrorText } from "./UiStyled.styled.tsx";

interface ErrorProps {
  children: React.ReactNode;
}
const ErrorText: React.FC<ErrorProps> = (props) => {
  return <StyledErrorText>‍{props.children}</StyledErrorText>;
};

export default ErrorText;
