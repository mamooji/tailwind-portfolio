import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
