// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
// == Import : local
import App from 'src/containers/App';
import store from 'src/store';


// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
