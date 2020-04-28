// Action Types
import { CHANGE_CONTACT_VALUE } from 'src/actions/contact';

// Initial State
const initialState = {
  name: '',
  email: '',
  message: '',
};

// Reducer
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_VALUE: {
      return {
        ...state,
        [action.id]: action.value,
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
