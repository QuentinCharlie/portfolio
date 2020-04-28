// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import {
  Responsive,
  Dropdown,
  Segment,
  Menu,
} from 'semantic-ui-react';

import getTranslatedUrl from 'src/utils/lang';

// Import
import NavStyled from './NavStyled';

// == Composant
const Nav = ({ changeLang, activeLang }) => {
  const handleItemClick = () => {
    // console.log('item click');
  };

  const location = useLocation();

  useEffect(() => {
    if (activeLang === 'gb' && (
      location.pathname === '/cv'
      || location.pathname === '/competences'
      || location.pathname === '/jeux-video'
      || location.pathname === '/photos')) {
      changeLang('fr');
    }
  }, [useLocation]);

  const history = useHistory();

  const handleFlagClick = (e) => {
    // console.log(e.target.className.replace(' flag', ''));
    const lang = e.target.className.replace(' flag', '');
    changeLang(lang);
    const currentPath = location.pathname;
    const translatedUrl = getTranslatedUrl(currentPath);
    history.push(translatedUrl);
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
              icon="envelope"
              as={NavLink}
              to="/contact"
              exact
              activeClassName="active"
              onClick={handleItemClick}
            />
          </Dropdown.Menu>
        </Dropdown>
        <div className="flags">
          {activeLang === 'gb' && (
            <div className="fr flag" onClick={handleFlagClick} />
          )}
          {activeLang === 'fr' && (
            <div className="gb flag" onClick={handleFlagClick} />
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
          icon="envelope"
          as={NavLink}
          to="/contact"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <div className="flags">
          {activeLang === 'gb' && (
            <div className="fr flag" onClick={handleFlagClick} />
          )}
          {activeLang === 'fr' && (
            <div className="gb flag" onClick={handleFlagClick} />
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
