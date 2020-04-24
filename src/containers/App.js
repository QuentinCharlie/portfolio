import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import App from 'src/components/App';

// Action Creators

// == Data / state
const mapStateToProps = (state) => ({
  lang: state.nav.lang,
});

// == Actions / dispatch
const mapDispatchToProps = () => ({});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
