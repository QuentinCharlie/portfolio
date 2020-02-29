import styled from 'styled-components';

const NavStyled = styled.div`
  position: relative;

  #burger-menu-icon {
    display: flex;
    align-items: center;
  }

  .flags {
    position: absolute;
    right: 1em; 
    bottom: calc(50% - (25px / 2));

    .flag {
      height: 25px
    }
    .gb {     
      content: url("http://icons.iconarchive.com/icons/gosquared/flag/64/United-Kingdom-icon.png");
    }
    .fr {
      content: url("http://icons.iconarchive.com/icons/gosquared/flag/64/France-icon.png");
    }
  }
`;

export default NavStyled;
