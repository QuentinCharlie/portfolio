// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

// == Import
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = ({ skills }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <SkillsStyled>
      <Input
        autoFocus
        placeholder="Recherche..."
        onChange={handleChange}
      />
      <ul>
        {skills.map((skill) => (
          <li>
            <img src={skill.imageUrl} alt="" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </SkillsStyled>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

// == Export
export default Skills;
