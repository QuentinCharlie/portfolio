import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Skills from 'src/components/AppFrench/Skills';

// Action Creators
import { changeInputValue } from 'src/actions/skills';

// == Data / state
const mapStateToProps = (state) => ({
  skills: state.skills.languages,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    dispatch(changeInputValue(value));
  },
});

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default SkillsContainer;
