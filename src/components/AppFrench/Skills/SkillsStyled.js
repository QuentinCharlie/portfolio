import styled from 'styled-components';

const SkillsStyled = styled.div`
  width: 50%; 
  margin: 0 auto;

  .ui input {
    margin-bottom: 1em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    height: 35vh;
    overflow-y: auto;
    justify-content: center;

    
    li {
      display: flex;
      align-items: center;
      padding: 0.5em;
      font-size: 1.3em;

      img {
      width: 50px;
      margin-right: 0.5em;
      }
    }
  }
`;

export default SkillsStyled;
