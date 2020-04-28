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
}) => {
  const changeValue = (e) => {
    const { id } = e.currentTarget;
    const { value } = e.currentTarget;
    changeContactValue(id, value);
  };
  return (
    <ContactStyled>
      <Form>
        <Form.Field>
          <label htmlFor="name">Votre Nom</label>
          <input
            id="name"
            type="text"
            placeholder="Votre Nom"
            value={name}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Votre email</label>
          <input
            id="email"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            type="text"
            placeholder="Votre message..."
            value={message}
            onChange={changeValue}
          />
        </Form.Field>
        <Button type="submit">Envoyer</Button>
      </Form>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeContactValue: PropTypes.func.isRequired,
};

// == Export
export default Contact;
