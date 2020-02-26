// Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Import
import Nav from 'src/components/Nav';
import Name from 'src/components/Name';
import CV from 'src/components/CV';
import Skills from 'src/containers/Skills';

// Styles
import AppStyled from './AppStyled';

// Composant
const App = () => (
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
export default App;
