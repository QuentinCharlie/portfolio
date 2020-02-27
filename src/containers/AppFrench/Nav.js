import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Nav from 'src/components/AppFrench/Nav';

// Action Creators
import { changeLang } from 'src/actions/nav';

// == Data / state
const mapStateToProps = (state) => ({
  activeLang: state.nav.lang,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => {
    dispatch(changeLang(lang));
  },
});

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
