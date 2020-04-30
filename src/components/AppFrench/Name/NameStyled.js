import styled from 'styled-components';

const NameStyled = styled.div`
  display: inline-block;  
  padding: 1.5em 2.5em;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  h1 {
    color: #000;
    font-size: 3em;
    margin-bottom: 0;
  }
  h2 {
    color: #000;
    margin-top: 1rem;
  }
  .images {
    img {
      width: 70px;
      cursor: pointer;
      margin-top: 0.5em;
    }
    .github {
      margin-right: 1.5em;
      :hover {
        box-shadow: 0 0 10px black;
        border-radius: 50%;
      }
    }
    .opquast {
      margin-left: 1.5em;
      :hover {
        box-shadow: 0 0 10px black;
        border-radius: 5%;
      }
    }
  }
`;

export default NameStyled;
