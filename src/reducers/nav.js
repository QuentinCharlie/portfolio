// Action Types
import { CHANGE_LANG } from 'src/actions/nav';

// import data from 'src/data/data';

// Initial State
const initialState = {
  lang: 'fr',
};

// Reducer
const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LANG: {
      return {
        ...state,
        lang: action.lang,
      };
    }

    default:
      return state;
  }
};

export default navReducer;
