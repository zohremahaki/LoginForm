import React from "react";
import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome.tsx";
import LoginForm from "./Pages/LoginForm.tsx";
import Register from "./Pages/Register.tsx";
interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
