// Action Types
import { DO_SOMETHING } from 'src/actions/skills';

import data from 'src/data/data';

// Initial State
const initialState = data.langages;

// Reducer
const skillsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default skillsReducer;
