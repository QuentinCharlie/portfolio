/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import classNames from 'classnames';

// == Import
import validate from 'src/utils/emailValidator';
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
  displayErrorMessage,
}) => {
  const changeValue = (e) => {
    const { id } = e.currentTarget;
    const { value } = e.currentTarget;
    changeContactValue(id, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && validate(email) && message.length >= 10) {
      changeLoading();
      // console.log(contactState);
      const contactInfo = {
        ...contactState,
        lang,
      };
      sendContactForm(contactInfo);
    }
    else {
      // console.log('erreur');
      displayErrorMessage();
    }
  };
  useEffect(() => { // reset the success/error message after 10sec
    setTimeout(() => {
      resetResultMessage();
    }, 10000);
  }, [resultMessage !== '']);

  const classNameNameCSS = classNames(
    'required',
    name === '' ? 'notok' : 'ok',
  );
  const classNameEmailCSS = classNames(
    'required',
    email === '' || !validate(email) ? 'notok' : 'ok',
  );
  const classNameMessageCSS = classNames(
    'required',
    message === '' || message.length < 10 ? 'notok' : 'ok',
  );
  return (
    <ContactStyled>
      <div className="title">Contactez-moi !</div>
      <div className="linkedin">Vous pouvez le faire via <a href="https://www.linkedin.com/in/quentin-charlie/" target="_blank" rel="noopener noreferrer">Linkedin</a> <br /> ou en remplissant le formulaire ci-dessous.</div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="name">
            Votre nom
            <span className={classNameNameCSS}>
              {name === '' ? 'requis' : 'Ok'}
            </span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre Nom"
            value={name}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">
            Votre email
            <span className={classNameEmailCSS}>
              {email === '' ? 'requis' : ''}
              {email !== '' && !validate(email) ? 'email invalide' : ''}
              {validate(email) ? 'Ok' : ''}
            </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="message">
            Votre message
            <span className={classNameMessageCSS}>
              {message === '' ? 'au moins 10 caractères' : ''}
              {message !== '' && message.length < 10
                ? `encore ${10 - message.length} caractère${message.length < 9 ? 's' : ''} requis` : ''}
              {message.length >= 10 ? 'Ok' : ''}
            </span>
          </label>
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
          content={`Veuillez vérifier ce(s) champ(s) : 
            ${name === '' ? 'Nom' : ''}
            ${email === '' || !validate(email) ? 'Email' : ''}
            ${message.length < 10 ? 'Message' : ''}
          `}
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
  displayErrorMessage: PropTypes.func.isRequired,
};

// == Export
export default Contact;
