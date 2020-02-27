// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Responsive,
  Dropdown,
  Segment,
  Menu,
  Flag,
} from 'semantic-ui-react';

// Import
import NavStyled from './NavStyled';

// == Composant
const Nav = ({ changeLang, activeLang }) => {
  const handleItemClick = () => {
    // console.log('item click');
  };

  const handleFlagClick = (e) => {
    // console.log(e.target.className.replace(' flag', ''));
    const lang = e.target.className.replace(' flag', '');
    changeLang(lang);
  };

  return (
    <Segment inverted as={NavStyled}>

      <Responsive as={Menu} inverted secondary maxWidth={450}>
        <Dropdown
          id="burger-menu-icon"
          icon={{
            name: 'bars',
            size: 'big',
          }}
          basic
          className="icon"
        >
          <Dropdown.Menu>
            <Dropdown.Item
              as={NavLink}
              to="/"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            >
              Home
            </Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              to="/resume"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            >
              Resume
            </Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              to="/skills"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            >
              Skills
            </Dropdown.Item>
            <Dropdown.Item
              icon="game"
              as={NavLink}
              to="/video-games"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            />
            <Dropdown.Item
              icon="photo"
              as={NavLink}
              to="/pictures"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <div className="flags">
          {activeLang === 'gb' && (
            <Flag name="fr" onClick={handleFlagClick} />
          )}
          {activeLang === 'fr' && (
            <Flag name="gb" onClick={handleFlagClick} />
          )}
        </div>
      </Responsive>

      <Responsive as={Menu} inverted secondary minWidth={450}>
        <Menu.Item
          name="Home"
          as={NavLink}
          to="/"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Resume"
          as={NavLink}
          to="/resume"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/skills"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        >
          Skills
        </Menu.Item>
        <Menu.Item
          icon="game"
          as={NavLink}
          to="/video-games"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          icon="photo"
          as={NavLink}
          to="/pictures"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <div className="flags">
          {activeLang === 'gb' && (
            <Flag name="fr" onClick={handleFlagClick} />
          )}
          {activeLang === 'fr' && (
            <Flag name="gb" onClick={handleFlagClick} />
          )}
        </div>
      </Responsive>

    </Segment>
  );
};

Nav.propTypes = {
  changeLang: PropTypes.func.isRequired,
  activeLang: PropTypes.string.isRequired,
};

// == Export
export default Nav;
