import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;
