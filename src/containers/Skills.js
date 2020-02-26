import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Skills from 'src/components/Skills';

// Action Creators
// import { doSomething } from 'src/actions/skills';

// == Data / state
const mapStateToProps = (state) => ({
  skills: state.skills,
});

// == Actions / dispatch
const mapDispatchToProps = () => ({});

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default SkillsContainer;
