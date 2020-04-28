/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

// == Import
import ContactStyled from './ContactStyled';

// == Composant
const Contact = () => {

  return (
    <ContactStyled>
      <Form>
        <Form.Field>
          <label htmlFor="name">Votre Nom</label>
          <input id="name" type="text" placeholder="Votre Nom" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Votre email</label>
          <input id="email" type="email" placeholder="Votre email" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="message">Votre message</label>
          <textarea id="message" type="text" placeholder="Votre message..." />
        </Form.Field>
        <Button type="submit">Envoyer</Button>
      </Form>
    </ContactStyled>
  );
};

// == Export
export default Contact;
