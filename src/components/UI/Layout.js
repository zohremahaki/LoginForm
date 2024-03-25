import React from "react";
import { StyledMain } from "./UiStyled.ts";
import Header from "./Header.js";
const Layout = (props) => {
  return (
    <StyledMain>
      <Header>{props.header}</Header>
      <section>{props.children}</section>
    </StyledMain>
  );
};

export default Layout;
