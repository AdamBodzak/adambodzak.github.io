import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import AboutMeView from './Views/AboutMeView/AboutMeView';
import SkillsView from './Views/SkillsView/SkillsView';
import ProjectsView from './Views/ProjectsView/ProjectsView';
import ContactView from './Views/ContactView/ContactView';

function App() {
  return (
    <>
      <p>Tu będzie moje portfolio</p>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>O mnie</NavLink>
              </li>
              <li>
                <NavLink to='/skills'>Umiejętności</NavLink>
              </li>
              <li>
                <NavLink to='/projects'>Projekty</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Kontakt</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/skills' >
              <SkillsView />
            </Route>
            <Route path='/projects' >
              <ProjectsView />
            </Route>
            <Route path='/contact' >
              <ContactView />
            </Route>
            <Route path='/' >
              <AboutMeView />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
