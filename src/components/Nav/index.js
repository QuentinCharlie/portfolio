// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, Menu, Flag } from 'semantic-ui-react';

// Import
import NavStyled from './NavStyled';

// == Composant
const Nav = () => {
  const handleItemClick = () => {
    console.log('item click');
  };

  return (
    <Segment inverted as={NavStyled}>
      <Menu inverted secondary>
        <Menu.Item
          name="Accueil"
          as={NavLink}
          to="/"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          name="CV"
          as={NavLink}
          to="/cv"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/competences"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        >
          Compétences
        </Menu.Item>
        <Menu.Item
          icon="game"
          as={NavLink}
          to="/jeux-videos"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <Menu.Item
          icon="photo"
          as={NavLink}
          to="/photos"
          exact
          activeClassName="active"
          onClick={handleItemClick}
        />
        <div className="flags">
          <Flag name="fr" />
          <Flag name="gb" />
        </div>
      </Menu>
    </Segment>
  );
};

// == Export
export default Nav;
