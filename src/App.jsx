import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
