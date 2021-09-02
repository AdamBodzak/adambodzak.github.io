import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//View import
import AboutMeView from "./Views/AboutMeView/AboutMeView";
import SkillsView from "./Views/SkillsView/SkillsView";
import ProjectsView from "./Views/ProjectsView/ProjectsView";
import ContactView from "./Views/ContactView/ContactView";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/about_me">
          <AboutMeView />
        </Route>
        <Route path="/projects">
          <ProjectsView />
        </Route>
        <Route path="/contact">
          <ContactView />
        </Route>
        <Route exact path="/">
          <SkillsView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
