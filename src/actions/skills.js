// Types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// Creators
export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});
