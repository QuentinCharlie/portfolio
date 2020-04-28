// Types
export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';

// Creators
export const changeContactValue = (id, value) => ({
  type: CHANGE_CONTACT_VALUE,
  id,
  value,
});
