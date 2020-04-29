/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';

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
  resultMessage,
  resetResultMessage,
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
  useEffect(() => {
    setTimeout(() => {
      resetResultMessage();
    }, 10000);
  }, [resultMessage !== '']);
  return (
    <ContactStyled>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit" loading={isLoading}>Envoyer</Button>
      </Form>

      {resultMessage === 'success' && (
        <Message
          success
          header="Votre message a bien été envoyé !"
          content="Une confirmation a également été envoyé à l'adresse mail que vous avez renseigné."
        />
      )}

      {resultMessage === 'error' && (
        <Message
          negative
          header="Oups, ça n'a pas marché..."
          content="Veuillez vérifier si vos informations sont correctes."
        />
      )}
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
  resultMessage: PropTypes.string.isRequired,
  resetResultMessage: PropTypes.func.isRequired,
};

// == Export
export default Contact;
