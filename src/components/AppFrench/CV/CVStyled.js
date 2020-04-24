import styled from 'styled-components';

const CVStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(50vh - 68px);
  .image {
    display: flex;
    /* justify-content: center; ??
    it doesn't work here, don't know why
    had to include this style in the component
    */

  }
`;

export default CVStyled;
