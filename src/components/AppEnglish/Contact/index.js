/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

// == Import
import ContactStyled from './ContactStyled';

// == Composant
const Contact = ({
  name,
  email,
  message,
  changeContactValue,
  contactState,
  sendContactForm,
  lang,
  isLoading,
  changeLoading,
}) => {
  const changeValue = (e) => {
    const { id } = e.currentTarget;
    const { value } = e.currentTarget;
    changeContactValue(id, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeLoading();
    // console.log(contactState);
    const contactInfo = {
      ...contactState,
      lang,
    };
    sendContactForm(contactInfo);
  };
  return (
    <ContactStyled>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            type="text"
            placeholder="Your message..."
            value={message}
            onChange={changeValue}
          />
        </Form.Field>
        <Button type="submit" loading={isLoading}>Send</Button>
      </Form>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeContactValue: PropTypes.func.isRequired,
  contactState: PropTypes.object.isRequired,
  sendContactForm: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  changeLoading: PropTypes.func.isRequired,
};

// == Export
export default Contact;
