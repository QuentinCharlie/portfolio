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
      <div className="title">Contact me !</div>
      <div className="linkedin">You can get to me on <a href="https://www.linkedin.com/in/quentin-charlie/">Linkedin</a> <br /> or by filling this form below.</div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="name">
            Your name
            <span className={classNameNameCSS}>
              {name === '' ? 'required' : 'Ok'}
            </span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">
            Your email
            <span className={classNameEmailCSS}>
              {email === '' ? 'required' : ''}
              {email !== '' && !validate(email) ? 'invalid email' : ''}
              {validate(email) ? 'Ok' : ''}
            </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={changeValue}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="message">
            Your message
            <span className={classNameMessageCSS}>
              {message === '' ? 'at least 10 characters' : ''}
              {message !== '' && message.length < 10
                ? `${10 - message.length} more character${message.length < 9 ? 's' : ''} needed` : ''}
              {message.length >= 10 ? 'Ok' : ''}
            </span>
          </label>
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

      {resultMessage === 'success' && (
        <Message
          success
          header="Your message has been successfully sent !"
          content="A confirmation was also sent at the email adress you gave me."
        />
      )}

      {resultMessage === 'error' && (
        <Message
          negative
          header="Oops, something went wrong..."
          content={`Please check the following field(s) : 
            ${name === '' ? 'Name' : ''}
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
