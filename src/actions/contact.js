// Types
export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';

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
