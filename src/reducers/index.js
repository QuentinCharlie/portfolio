import { combineReducers } from 'redux';

// import demoReducer from './demo';
import skillsReducer from './skills';

const rootReducer = combineReducers({
  // demo: demoReducer,
  skills: skillsReducer,
  // ... autres reducers
});

export default rootReducer;
