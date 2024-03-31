import React from "react";
import { StyledLabel } from "./UiStyled.styled.tsx";

interface LabelProbs {
  children: React.ReactNode;
  $valid: boolean;
  htmlFor: string;
}

const Label: React.FC<LabelProbs> = (props) => {
  return (
    <StyledLabel $valid={props.$valid} htmlFor={props.htmlFor}>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
