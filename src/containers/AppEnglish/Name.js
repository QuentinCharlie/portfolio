import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Name from 'src/components/AppEnglish/Name';

// Action Creators

// == Data / state
const mapStateToProps = (state) => ({
  lang: state.nav.lang,
});

// == Actions / dispatch
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const NameContainer = connect(mapStateToProps, mapDispatchToProps)(Name);

export default NameContainer;
