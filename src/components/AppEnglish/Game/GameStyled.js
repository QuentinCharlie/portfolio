import styled from 'styled-components';

const GameStyled = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
  .player {
    margin: 0 auto;
    box-shadow: 0 0 5px black;
    max-width: 95%;
  }
`;

export default GameStyled;
