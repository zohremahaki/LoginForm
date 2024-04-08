import React from "react";
import Layout from "../components/UI/Layout.tsx";
import { Link } from "react-router-dom";
import { StyledButton } from "./PagesStyled.styled.tsx";

const Welcome: React.FC = () => {
  const styledLink = { textDecoration: "none", color: "#000" };
  return (
    <Layout header="خوش امدید">
      <Link to="/Login" style={styledLink}>
        <StyledButton>ورود</StyledButton>
      </Link>
      <Link to="/signup" style={styledLink}>
        <StyledButton>ثبت نام</StyledButton>
      </Link>
      <Link to="/dashboard" style={styledLink}>
        <StyledButton>داشبورد</StyledButton>
      </Link>
    </Layout>
  );
};

export default Welcome;
