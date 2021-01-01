import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <div className="pb-16">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
