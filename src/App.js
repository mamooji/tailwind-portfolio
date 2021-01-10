import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";
import NavbarV2 from "./components/UI/NavBarV2/NavbarV2";
import FooterV2 from "./components/UI/FooterV2/FooterV2";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      <NavbarV2 />
      <div className="pb-16">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/credits" component={Credits} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <FooterV2 />
    </div>
  );
}

export default App;
