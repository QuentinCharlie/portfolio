import styled from 'styled-components';

const ContactStyled = styled.div`
  @media (max-width: 320px) {
    width: 90%; 
  }
  @media (min-width: 321px) and (max-width: 480px) {
    width: 70%; 
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 50%; 
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 35%; 
  }
  @media (min-width: 1025px) and (max-width: 1250px) {
    width: 30%; 
  }
  @media (min-width: 1251px) {
    width: 25%; 
  }
  height: calc(100vh - 100px);
  overflow-y: auto;
  margin: 1em auto 0 auto;
  .title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 1em 0;
  }
  .linkedin {
    font-size: 1.1em;
    margin-bottom: 1.2em;
    a {
      font-weight: bold;
      font-size: 1.1em;
    }
  }
  label {
    text-align: left;
  }
  .button {
    margin: 1.2em 0;
  }
  .required {
    position: absolute;
    right: 5px;
    font-style: italic;
    font-weight: normal;
  }
  .notok {
    color: rgba(192, 57, 43, 1);
  }
  .ok {
    color: rgba(38, 166, 91, 1);
  }
`;

export default ContactStyled;
