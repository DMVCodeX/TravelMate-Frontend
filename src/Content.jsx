import { Routes, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Home } from "./Home";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
