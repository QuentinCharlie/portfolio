// Action Types
import {
  CHANGE_CONTACT_VALUE,
  CHANGE_LOADING,
  RESET_FORM,
  DISPLAY_SUCCESS_MESSAGE,
  DISPLAY_ERROR_MESSAGE,
  RESET_RESULT_MESSAGE,
} from 'src/actions/contact';

// Initial State
const initialState = {
  name: '',
  email: '',
  message: '',
  isLoading: false,
  resultMessage: '',
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

    case DISPLAY_SUCCESS_MESSAGE: {
      return {
        ...state,
        resultMessage: 'success',
      };
    }

    case DISPLAY_ERROR_MESSAGE: {
      return {
        ...state,
        resultMessage: 'error',
      };
    }

    case RESET_RESULT_MESSAGE: {
      return {
        ...state,
        resultMessage: '',
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
