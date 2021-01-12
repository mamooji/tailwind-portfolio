import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";
import Navbar from "./components/UI/NavBar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-16">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/credits" component={Credits} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
