import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import { Route, Routes, Navigate, useLocation } from "react-router";

function App() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />
      <main key={location.pathname} className="flex-1 animate-rise-in">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
