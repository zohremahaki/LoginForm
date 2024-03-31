import React from "react";
import Layout from "../components/UI/Layout.tsx";
import Button from "../components/UI/Button.tsx";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  const styledLink = { textDecoration: "none", color: "#000" };
  return (
    <Layout header="خوش امدید">
      <Link to="/Login" style={styledLink}>
        <Button>ورود</Button>
      </Link>
      <Link to="/register" style={styledLink}>
        <Button>ثبت نام</Button>
      </Link>
    </Layout>
  );
};

export default Welcome;
