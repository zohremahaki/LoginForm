import React from "react";
import { StyledMain, StyledHeading } from "./UiStyled.styled.tsx";

interface LayoutProbs {
  header: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProbs> = (props) => {
  return (
    <StyledMain>
      <StyledHeading>{props.header}</StyledHeading>
      <section>{props.children}</section>
    </StyledMain>
  );
};

export default Layout;
