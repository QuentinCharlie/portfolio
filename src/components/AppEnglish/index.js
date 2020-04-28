// Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import
import Nav from 'src/containers/AppEnglish/Nav';
import Name from 'src/components/AppEnglish/Name';
import CV from 'src/components/AppEnglish/CV';
import Skills from 'src/containers/AppEnglish/Skills';
import Game from 'src/components/AppEnglish/Game';
import Contact from 'src/containers/AppEnglish/Contact';

// Styles
import AppStyled from './AppStyled';

// Composant
const AppEnglish = () => (
  <AppStyled>
    <Nav />
    <Switch>
      <Route exact path="/" component={Name} />
      <Route exact path="/resume" component={CV} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/video-games" component={Game} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </AppStyled>
);

// Export
export default AppEnglish;
