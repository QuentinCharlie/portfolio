import styled from 'styled-components';

const ContactStyled = styled.div`
  /* @todo media queries for width*/
  width: 25%; 
  margin: 1em auto 0 auto;
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
`;

export default ContactStyled;
