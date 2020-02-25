// Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import
import Nav from 'src/components/Nav';
import Name from 'src/components/Name';
import CV from 'src/components/CV';
import Skills from 'src/components/Skills';

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
    </Switch>
  </AppStyled>
);

// Export
export default App;
