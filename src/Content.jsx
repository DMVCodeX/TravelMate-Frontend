import { Routes, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { LogIn } from "./LogIn";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
