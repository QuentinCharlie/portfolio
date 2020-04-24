import { combineReducers } from 'redux';

import skillsReducer from './skills';
import navReducer from './nav';

const rootReducer = combineReducers({
  skills: skillsReducer,
  nav: navReducer,
});

export default rootReducer;
