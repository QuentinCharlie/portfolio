/* eslint-disable no-unused-vars, no-console */
/* eslint-disable no-console */
import axios from 'axios';

import {
  SEND_CONTACT_FORM,
  resetForm,
  displaySuccessMessage,
  displayErrorMessage,
} from 'src/actions/contact';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_CONTACT_FORM:
      axios({
        method: 'POST',
        url: 'http://localhost:3002/send',
        data: action.contactInfo,
      })
        // succès
        .then((response) => {
          console.log('message envoyé', response);
          store.dispatch(resetForm());
          store.dispatch(displaySuccessMessage());
        })
        // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
          store.dispatch(displayErrorMessage());
        });
      break;

    default:
      break;
  }
  // Passes à ton voisin
  next(action);
};

export default ajaxMiddleware;
