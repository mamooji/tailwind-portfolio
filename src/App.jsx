import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import { Route, Routes, Navigate } from "react-router";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-16">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
