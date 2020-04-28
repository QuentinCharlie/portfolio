// Action Types
import {
  CHANGE_CONTACT_VALUE,
  CHANGE_LOADING,
  RESET_FORM,
} from 'src/actions/contact';

// Initial State
const initialState = {
  name: '',
  email: '',
  message: '',
  isLoading: false,
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

    case CHANGE_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    case RESET_FORM: {
      return {
        ...state,
        name: '',
        email: '',
        message: '',
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
