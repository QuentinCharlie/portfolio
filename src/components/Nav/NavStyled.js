import styled from 'styled-components';

const NavStyled = styled.div`
  position: relative;

  .flags {
    position: absolute;
    right: 0;
    display:flex;
    flex-direction: column;

    .flag {
      margin-top: 5px;
      width: 20px;
    }
  }
`;

export default NavStyled;
