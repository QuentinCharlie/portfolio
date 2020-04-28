// Types
export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';
export const RESET_FORM = 'RESET_FORM';
export const CHANGE_LOADING = 'CHANGE_LOADING';

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
