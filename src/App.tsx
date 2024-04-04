import React from "react";
import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome.tsx";
import SignupPage from "./Pages/SignupPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
