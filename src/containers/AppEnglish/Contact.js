import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Contact from 'src/components/AppEnglish/Contact';

// Action Creators
import { changeContactValue, sendContactForm } from 'src/actions/contact';

// == Data / state
const mapStateToProps = (state) => ({
  name: state.contact.name,
  email: state.contact.email,
  message: state.contact.message,
  contactState: state.contact,
  lang: state.nav.lang,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeContactValue: (id, value) => {
    dispatch(changeContactValue(id, value));
  },
  sendContactForm: (contactInfo) => {
    dispatch(sendContactForm(contactInfo));
  },
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
