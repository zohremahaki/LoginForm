import React from "react";
import { Styledicon } from "./UiStyled.ts";

const Icon = (props) => {
  return <Styledicon>{props.children}</Styledicon>;
};

export default Icon;
