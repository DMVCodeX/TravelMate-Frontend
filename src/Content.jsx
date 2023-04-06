import { SignUp } from "./SignUp";
import { Routes, Route } from "react-router-dom";

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
