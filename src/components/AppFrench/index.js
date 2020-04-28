// Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Import
import Nav from 'src/containers/AppFrench/Nav';
import Name from 'src/components/AppFrench/Name';
import CV from 'src/components/AppFrench/CV';
import Skills from 'src/containers/AppFrench/Skills';
import Game from 'src/components/AppFrench/Game';
import Contact from 'src/containers/AppFrench/Contact';

// Styles
import AppStyled from './AppStyled';

// Composant
const AppFrench = () => (
  <AppStyled>
    <Nav />
    <Switch>
      <Route exact path="/" component={Name} />
      <Route exact path="/cv" component={CV} />
      <Route exact path="/competences" component={Skills} />
      <Route exact path="/jeux-video" component={Game} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </AppStyled>
);

// Export
export default AppFrench;
