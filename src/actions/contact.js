// Types
export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';
export const RESET_FORM = 'RESET_FORM';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const DISPLAY_SUCCESS_MESSAGE = 'DISPLAY_SUCCESS_MESSAGE';
export const DISPLAY_ERROR_MESSAGE = 'DISPLAY_ERROR_MESSAGE';
export const RESET_RESULT_MESSAGE = 'RESET_RESULT_MESSAGE';

// Creators
export const changeContactValue = (id, value) => ({
  type: CHANGE_CONTACT_VALUE,
  id,
  value,
});

export const sendContactForm = (contactInfo) => ({
  type: SEND_CONTACT_FORM,
  contactInfo,
});

export const changeLoading = () => ({
  type: CHANGE_LOADING,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const displaySuccessMessage = () => ({
  type: DISPLAY_SUCCESS_MESSAGE,
});

export const displayErrorMessage = () => ({
  type: DISPLAY_ERROR_MESSAGE,
});

export const resetResultMessage = () => ({
  type: RESET_RESULT_MESSAGE,
});
