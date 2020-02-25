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

    
    li {
      display: flex;
      align-items: center;
      padding: 0.5em;

      img {
      width: 30px;
      margin-right: 0.5em;
      }
    }
  }
`;

export default SkillsStyled;
