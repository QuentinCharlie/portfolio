import { combineReducers } from 'redux';

import skillsReducer from './skills';
import navReducer from './nav';
import contactReducer from './contact';

const rootReducer = combineReducers({
  skills: skillsReducer,
  nav: navReducer,
  contact: contactReducer,
});

export default rootReducer;
