import React from "react";
import Layout from "../components/UI/Layout";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
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
