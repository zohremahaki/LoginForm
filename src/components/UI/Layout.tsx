import React from "react";
import { StyledMain } from "./UiStyled.styled.tsx";
import Header from "./Header.tsx";

interface LayoutProbs {
  header: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProbs> = (props) => {
  return (
    <StyledMain>
      <Header>{props.header}</Header>
      <section>{props.children}</section>
    </StyledMain>
  );
};

export default Layout;
