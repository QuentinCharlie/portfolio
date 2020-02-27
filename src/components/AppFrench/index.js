// Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Import
import Nav from 'src/containers/AppFrench/Nav';
import Name from 'src/components/AppFrench/Name';
import CV from 'src/components/AppFrench/CV';
import Skills from 'src/containers/AppFrench/Skills';

// Styles
import AppStyled from './AppStyled';

// Composant
const AppFrench = () => (
  <AppStyled>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Name />
      </Route>
      <Route exact path="/cv">
        <CV />
      </Route>
      <Route exact path="/competences">
        <Skills />
      </Route>
      <Route exact path="/jeux-video">
        <Segment inverted tertiary>
          Contenu à venir...
        </Segment>
      </Route>
      <Route exact path="/photos">
        <Segment inverted tertiary>
          Contenu à venir...
        </Segment>
      </Route>
    </Switch>
  </AppStyled>
);

// Export
export default AppFrench;
