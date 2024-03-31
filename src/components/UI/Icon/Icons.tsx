import React from "react";
import { Styledicon } from "../UiStyled.styled.tsx";

interface IconProbs {
  children: React.ReactNode;
  onClick?: () => void;
}
const Icon: React.FC<IconProbs> = (props) => {
  return <Styledicon onClick={props.onClick}>{props.children}</Styledicon>;
};

export default Icon;
