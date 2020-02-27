// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

// == Import
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = ({ skills, changeInputValue }) => {
  const handleChange = (e) => {
    // console.log(e.target.value);
    changeInputValue(e.target.value);
  };

  return (
    <SkillsStyled>
      <Input
        autoFocus
        placeholder="Search..."
        onChange={handleChange}
      />
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
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
  changeInputValue: PropTypes.func.isRequired,
};

// == Export
export default Skills;
