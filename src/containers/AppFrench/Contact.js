import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Contact from 'src/components/AppFrench/Contact';

// Action Creators
import { changeContactValue } from 'src/actions/contact';

// == Data / state
const mapStateToProps = (state) => ({
  name: state.contact.name,
  email: state.contact.email,
  message: state.contact.message,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeContactValue: (id, value) => {
    dispatch(changeContactValue(id, value));
  },
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
