// Action Types
import { CHANGE_INPUT_VALUE } from 'src/actions/skills';

import data from 'src/data/data';

// Initial State
const initialState = data.skills;

// Reducer
const skillsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      const filteredSkills = data.skills.languages.filter((skill) => (
        skill.name.toUpperCase().includes(action.inputValue.toUpperCase())
      ));

      return {
        ...state,
        languages: filteredSkills,
        inputValue: action.inputValue,
      };
    }

    default:
      return state;
  }
};

export default skillsReducer;
